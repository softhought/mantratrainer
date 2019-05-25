import { Component, OnInit } from '@angular/core';
import { HttpRequestHandlerService } from 'src/app/services/http-request-handler.service';
import { NavController, ToastController  } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';

@Component({
  selector: 'app-membercalorietargetassignmentlist',
  templateUrl: './membercalorietargetassignmentlist.page.html',
  styleUrls: ['./membercalorietargetassignmentlist.page.scss'],
})
export class MembercalorietargetassignmentlistPage implements OnInit {
  weeklyNotAssignedTargetsMemberList = [];

  calorieAssingmentFormGroup:FormGroup;

  constructor(private _httpReqHandler:HttpRequestHandlerService,public toastController: ToastController,fb: FormBuilder) { 


  }

  ngOnInit() {
    this.getWeeklyNotAssignedTargetsMemberList();
  }


  getWeeklyNotAssignedTargetsMemberList(){

    let response;
    this._httpReqHandler.getWeeklyNotAssignedTargetsMemberList("CALORIE").then(data => {
    response = data;
  
    

    if(response.STATUS==200 && response.STATUS_MSG=="SUCCESS"){

      let weeklyNotAssignedTargetsMember = response.RESULT;
      this.weeklyNotAssignedTargetsMemberList = response.RESULT;
      
    


     let nonassignedMemberCount = Object.keys(weeklyNotAssignedTargetsMember).length;

     let nonAssignedMemberObj:any;
     let coundownObj:any;

     for(let i = 0; i<nonassignedMemberCount;i++) {
       // clearInterval(this.noOfRecords);
       // (document.querySelector('#timerDisplay_'+i) as HTMLElement).innerText = "";
       
        
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

        //this.noOfRecords = this.noOfRecords + 1 ;
     }
 


   }
    else{
      this.presentToastWithOptions('Some Problem.Please try again later...','bottom');
    }
  

  },
    error => {
      console.log(error);
        console.log("Error on login");
    });

  }



  assignTarget(memberObj){
    console.log(memberObj);
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
