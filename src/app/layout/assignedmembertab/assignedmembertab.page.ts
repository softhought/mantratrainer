import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpRequestHandlerService } from 'src/app/services/http-request-handler.service';
import { NavController, ToastController  } from '@ionic/angular';
import { Router } from '@angular/router';
import { DataShareService } from 'src/app/services/data-share.service';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators'


@Component({
  selector: 'app-assignedmembertab',
  templateUrl: './assignedmembertab.page.html',
  styleUrls: ['./assignedmembertab.page.scss'],
})
export class AssignedmembertabPage implements OnInit , OnDestroy  {

  page = 1;
  perPage = 0;
  totalData = 0;
  totalPage = 0;

  selectedBranch;

  serviceData:string="";
  todaysAssignedMemberList = [];

  countIntervel:any;
  secText;
  minText;
  hourText;

  countdownArry:any[] = [0];
  timerCountDown:any= [];

  dynamicIntervalName:any = [];
  setIntervalIDs = [];
  totalNoOfIntervels:number = 0;
  isListDataAvailable:boolean = false;
  noRecordsFound:boolean =false;

  private interval;
  noOfRecords = 0;
  constructor(private _httpReqHandler:HttpRequestHandlerService,private navCtrl :NavController,public toastController: ToastController,private router:Router,private _dataShareService:DataShareService) {
   
    this.serviceData = this._dataShareService.getSelectedExerciseDatas();
    console.log(this.serviceData);
    this.selectedBranch = this._dataShareService.getSelectedExerciseDatas().branchcode;
    console.log(this.selectedBranch);

  }

  /*
  ngOnInit() {
    this.getTodaysAssignedMemberList();
  }
  */

 ngOnDestroy() {
   console.log("ON DESTROY");
  this.removeAllIntervels();
  
}

ngOnInit(){
console.log("View Assign Enter");
}
 
ionViewWillLeave(){
  this.removeAllIntervels();
}
ionViewWillEnter() {
   
   // this.removeAllIntervels();
  
    let response;
    this._httpReqHandler.getTodaysAssignedMemberList(this.selectedBranch,this.page).then(data => {
    response = data;
  
    

    if(response.STATUS==200 && response.STATUS_MSG=="SUCCESS"){

      let assignedMemberList = response.RESULT;
      //this.todaysAssignedMemberList = response.RESULT;
      
      console.log("todaysMemberList List");
      console.log(this.todaysAssignedMemberList);
      console.log("todaysMemberList List End");
      


     let nonassignedMemberCount = Object.keys(assignedMemberList).length;

     let nonAssignedMemberObj:any;
     let coundownObj:any;

     for(let i = 0; i<nonassignedMemberCount;i++) {
       // clearInterval(this.noOfRecords);
       // (document.querySelector('#timerDisplay_'+i) as HTMLElement).innerText = "";
        this.showTimer(assignedMemberList[i].diffHour,assignedMemberList[i].diffMinute,assignedMemberList[i].diffSec,this.noOfRecords,this.noOfRecords);
        
        /*
        nonAssignedMemberObj = {
           "MEMBERSHIP_NO" : assignedMemberList[i].MEMBERSHIP_NO,
           "CUS_NAME" :  assignedMemberList[i].CUS_NAME,
           "assignedID" : assignedMemberList[i].assignedID,
           "startTime" : assignedMemberList[i].startTime,
           "startHr" : assignedMemberList[i].startHr,
           "startMin" : assignedMemberList[i].startMin,
           "startSec" : assignedMemberList[i].startSec,
           "diffHour" : assignedMemberList[i].diffHour,
           "diffMinute" : assignedMemberList[i].diffMinute,
           "diffSec" : assignedMemberList[i].diffSec,
           "time_diff" : assignedMemberList[i].time_diff,
           // "timer" :  this.showTimer(assignedMemberList[i].diffHour,assignedMemberList[i].diffMinute,assignedMemberList[i].diffSec,"dynamicIntervalTimer"+i,i),
          
         }
         */
         //this.todaysAssignedMemberList.push(nonAssignedMemberObj);

        this.noOfRecords = this.noOfRecords + 1 ;
     }
     this.todaysAssignedMemberList = response.RESULT;

     if(this.todaysAssignedMemberList.length > 0){
       this.noRecordsFound = false;
       this.isListDataAvailable = true;
     }
     
    }
    else if(response.STATUS==300 && response.STATUS_MSG=="NOT_FOUND"){
      this.noRecordsFound = true;
      this.isListDataAvailable = true;
      this.presentToastWithOptions('No records found...','bottom');
    }
    else{
      this.isListDataAvailable = true;
      this.presentToastWithOptions('Some Problem.Please try again later...','bottom');
    }
  

  },
    error => {
      console.log(error);
        console.log("Error on login");
    });
  }
  

  // routerOnDeactivate(){
  //   this.removeAllIntervels();
  // }




  
  loadData(event){
    this.isListDataAvailable = false;
    this.page = this.page+1;
  
     setTimeout(() => {
      
      let response;
      this._httpReqHandler.getTodaysAssignedMemberList(this.selectedBranch,this.page).then(data => {
      response = data;

        let assignedMemberList = response.RESULT;
        let nonassignedMemberCount = Object.keys(assignedMemberList).length;
        
         for(let i=0; i<nonassignedMemberCount ; i++) {
        //  clearInterval(this.noOfRecords)
          this.showTimer(assignedMemberList[i].diffHour,assignedMemberList[i].diffMinute,assignedMemberList[i].diffSec,this.noOfRecords,this.noOfRecords);
          this.todaysAssignedMemberList.push(response.RESULT[i]);
          this.noOfRecords = this.noOfRecords + 1 ;
        }
     
          if(nonassignedMemberCount > 0){
            this.isListDataAvailable = true;
          }
      
  
  
      },
      error => {
        console.log(error);
          console.log("Error on fetching ");
      });



      event.target.complete();
      }, 1000);

  }

  // ionViewWillLeave(){
  //   console.log("View Leave");
  //   this.removeAllIntervels();
  // }


  goToMemberAssignment(member) {
    this._dataShareService.setSelectedMemberDatas(member);
    this.router.navigate(['/memberassignment-profile']);
  }





  showTimer(Hour,Minute,Sec,dynamicinterval:any,i){
    //(document.querySelector('#timerDisplay_'+i) as HTMLElement).innerText ="";
   // let dynamicCountIntervel = ;
    let time;
    let secondCount = 0;
    let minute = 0;
    let hour = 0;

    secondCount = parseInt(Sec);
    minute = parseInt(Minute);
    hour = parseInt(Hour);

    this.setIntervalIDs.push(dynamicinterval); 

     this.dynamicIntervalName['i'+i] = setInterval(()=>{
      secondCount++;
      
  
      if(secondCount == 60) {
        secondCount = 0;
        minute=minute+1;
      }
  
      if(minute == 60) {
        minute = 0;
        hour=hour+1;
      }
  
  
    (document.querySelector('#timerDisplayHr_'+i) as HTMLElement).innerText = this.getCounterPrefix(hour);

    (document.querySelector('#timerDisplayMin_'+i) as HTMLElement).innerText = this.getCounterPrefix(minute);

    (document.querySelector('#timerDisplaySec_'+i) as HTMLElement).innerText = this.getCounterPrefix(secondCount);

    //(document.querySelector('#timerDisplay') as HTMLElement).innerText = this.getCounterPrefix(hour) + ":" + this.getCounterPrefix(minute) + ":" + this.getCounterPrefix(secondCount);

    },1000);
    this.totalNoOfIntervels = this.totalNoOfIntervels+1;
    
  }

  getCounterPrefix(val) {
    if(val<=9){
      return "0"+val;
    }
    return val;
  }



removeAllIntervels(){
  console.log(this.totalNoOfIntervels);
  //let countValue = this.dynamicIntervalName;
  //console.log("Length is abcderf "+countValue);
  for(let m = 0;m<this.totalNoOfIntervels;m++){
    console.log("clear Intervels no is " + this.setIntervalIDs[m]);
    clearInterval(this.dynamicIntervalName['i'+m]);
  }
  this.noOfRecords = 0;
  this.page = 1;
}
 

  async presentToastWithOptions(msg,pos) {
    const toast = await this.toastController.create({
      message: msg,
      showCloseButton: true,
      position: pos,
      animated : true,
      color:'light',
      keyboardClose:true,
      closeButtonText: 'X',
      duration:3000,
      cssClass:'customToastCls'
    });
    toast.present();
  }


}
