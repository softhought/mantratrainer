import { Component, OnInit, ViewChild } from '@angular/core';
import { IonicSelectableComponent } from 'ionic-selectable';
import { HttpRequestHandlerService } from 'src/app/services/http-request-handler.service';
import { DataShareService } from 'src/app/services/data-share.service';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-memberassignment-profile',
  templateUrl: './memberassignment-profile.page.html',
  styleUrls: ['./memberassignment-profile.page.scss'],
})
export class MemberassignmentProfilePage implements OnInit {

  @ViewChild('machineassignmentSlider') machineassignmentSlider: any;

  machineFilteredList = [];
  machineList = [];
  selectedBranch;
  selectedExercise;
  selectedExeName;
  selectedMemberObj;
  assigneWithStartExerciseForm: FormGroup;
  stopAssignedMemberExerciseForm: FormGroup;

  secText;
  minText;
  hrText;

  diffHours;
  diffMinutes;
  diffSecs;


  isHourDataAvailable:boolean = false;
  isMinDataAvailable:boolean = false;
  isSecDataAvailable:boolean = false;

  memberAssignedID:number = 0;
  membershipNO:string="";
  memberName:string="";
  memberMobile:any;
  memberGender:string="";
  memberPackageCode:string="";




  constructor(private _httpRequestHandlerService:HttpRequestHandlerService,private _dataShareService:DataShareService,private router:Router) {

    this.selectedBranch = this._dataShareService.getSelectedExerciseDatas().branchcode;
    this.selectedExercise = this._dataShareService.getSelectedExerciseDatas().exerciseID;
    this.selectedMemberObj = this._dataShareService.getSelectedMemberDatas();

    this.diffHours = this._dataShareService.getSelectedMemberDatas().diffHour;
    this.diffMinutes = this._dataShareService.getSelectedMemberDatas().diffMinute;
    this.diffSecs = this._dataShareService.getSelectedMemberDatas().diffSec;
    
    this.memberAssignedID = this._dataShareService.getSelectedMemberDatas().assignedID;
    this.membershipNO =  this._dataShareService.getSelectedMemberDatas().MEMBERSHIP_NO;
    this.memberName =  this._dataShareService.getSelectedMemberDatas().CUS_NAME;
    this.memberMobile =  this._dataShareService.getSelectedMemberDatas().mobileNO;
    this.memberGender = this._dataShareService.getSelectedMemberDatas().gender;
    this.memberPackageCode = this._dataShareService.getSelectedMemberDatas().packageCode;
    // console.log(this.selectedMemberObj);

    this.assigneWithStartExerciseForm = new FormGroup({
      exercisehdnId: new FormControl(this.selectedExercise, Validators.required),
      hdnBranchCd: new FormControl(this.selectedBranch, Validators.required),
      chooseMachine: new FormControl('',Validators.required),
    });

    this.stopAssignedMemberExerciseForm = new FormGroup({
      assignedId: new FormControl(this.memberAssignedID, Validators.required),
      calorieGiven: new FormControl('',Validators.required)
    });
  
  }

  ngOnInit() {
    this.machineassignmentSlider.lockSwipes(false);
    // console.log("Selected Member Data");
    // console.log(this.selectedMemberObj);
    // console.log("/Selected Member Data");

    this.getExerciseById(this.selectedExercise);
    this.getNonAssignedMachineList(this.selectedBranch,this.selectedExercise);


    if(this.memberAssignedID > 0) {
      this.getAssignedMemberDetailByID(this.memberAssignedID);
      this.machineassignmentSlider.slideNext(200);
      this.machineassignmentSlider.lockSwipes(true);
    }
    else{
      this.machineassignmentSlider.lockSwipes(true);
    }

  }

  onMachineChange(event: {component: IonicSelectableComponent,value: any}) {
    console.log(event);
  }


  getAssignedMemberDetailByID(assignedID:number) {
    let response;
    this._httpRequestHandlerService.getAssignedMemberDetailByID(assignedID).then((data: any) => {
        if(data.STATUS==200 && data.STATUS_MSG=="SUCCESS"){
          response = data.RESULT;
          this.showTimer(response.diffHour,response.diffMinute,response.diffSec);

        

          console.log("Assigned ID IS"+response.assignedID);
        }
        else{
          response = data.RESULT;
          console.log("Assigned ID ** "+response.assignedID);
        }
    },
    (error) => {
      console.log(error);
    });
  }

  
  getExerciseById(selectedexercise){
    let response;
    this._httpRequestHandlerService.getExerciseById(selectedexercise).then((data: any) => {
        response = data.RESULT;
        this.selectedExeName = response.exercise_name;
        console.log("Exercise name = " + this.selectedExeName);
    },
    (error) => {
      console.log(error);
    });

  }


  getNonAssignedMachineList(branch,selectedexercise) {
    this.machineFilteredList =[];
    
    this._httpRequestHandlerService.getNonAssignedMachineList(branch,selectedexercise).then((data: any) => {
      this.machineList = data.RESULT;
      var nonassignedMachineCount = Object.keys(this.machineList).length;
            let machineObj:any;
            for(let i = 0; i<nonassignedMachineCount;i++) {
              machineObj = {
                  "exercise_machine_mapped_id" : this.machineList[i].exercise_machine_mapped_id,
                  "machine_id":  this.machineList[i].machine_id,
                  "machine_name": this.machineList[i].machine_name,
                  "machine_code": this.machineList[i].machine_code
                }
                this.machineFilteredList.push(machineObj);
            }

        

    }, (error) => {
      console.log(error);
    })
   
  }



  assignedMachineToMember() {

    console.log(this.assigneWithStartExerciseForm.value);
    let response;
    this._httpRequestHandlerService.assignExerciseToMember(this.assigneWithStartExerciseForm.value,this.selectedMemberObj ).then((data: any) => {

      if(data.STATUS==200 && data.STATUS_MSG=="SUCCESS"){
        response = data.RESULT;
        this.router.navigate(['/member-machine-assignment']);
      }
     

     
    }, (error) => {
      console.log(error);
    })


  }


  stopExerciseProcess() {
    
    console.log(this.stopAssignedMemberExerciseForm.value);

    let response;
    this._httpRequestHandlerService.stopExerciseProcess(this.stopAssignedMemberExerciseForm.value).then((data: any) => {

      if(data.STATUS==200 && data.STATUS_MSG=="SUCCESS"){
        this.router.navigate(['/member-machine-assignment']);
      }
     
    }, (error) => {
      console.log(error);
    })


  }



  showTimer(Hour,Minute,Sec) {

    let dynamicCountIntervel;
    let secondCount:number = parseInt(Sec);
    let minute:number = parseInt(Minute);
    let hour:number = parseInt(Hour);




      dynamicCountIntervel = setInterval(()=>{
      secondCount++;
      
  
      if(secondCount == 60) {
        secondCount = 0;
        minute = minute+1;
      }
  
      if(minute == 60) {
        minute = 0;
        hour = hour+1;
      }
  
    //  this.secText


    this.secText = this.getCounterPrefix(secondCount);
    this.minText = this.getCounterPrefix(minute); 
    this.hrText = this.getCounterPrefix(hour); 

    this.isHourDataAvailable = true;
    this.isMinDataAvailable = true;
    this.isSecDataAvailable = true;
  
    },1000);
   
  }



  getCounterPrefix(val) {

    if(val<=9){
      return "0"+val;
    }

    return val;

  }



}
