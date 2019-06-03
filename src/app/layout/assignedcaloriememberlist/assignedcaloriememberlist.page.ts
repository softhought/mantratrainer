import { Component, OnInit } from '@angular/core';
import { HttpRequestHandlerService } from 'src/app/services/http-request-handler.service';
import { NavController, ToastController  } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { animate, trigger, state, transition, style } from '@angular/animations';

@Component({
  selector: 'app-assignedcaloriememberlist',
  templateUrl: './assignedcaloriememberlist.page.html',
  styleUrls: ['./assignedcaloriememberlist.page.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({transform: 'translateY(-100%)'}),
        animate('200ms ease-in', style({transform: 'translateY(0%)'}))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({transform: 'translateY(-100%)'}))
      ])
    ])
  ]
})
export class AssignedcaloriememberlistPage implements OnInit {

  weeklyAssignedTargetsMemberList = [];
  page = 1;
  perPage = 0;
  totalData = 0;
  totalPage = 0;
  isDataAvailable = false;
  noRecordsFound:boolean = false;

  constructor(private _httpRequestHandlerService:HttpRequestHandlerService,public toastController: ToastController) { }

  ngOnInit() {
    this.getWeeklyAssignedTargetsMemberList();
  }

  getWeeklyAssignedTargetsMemberList(){

    let response;
    this._httpRequestHandlerService.getWeeklyAssignedTargetsMemberList("CALORIE",this.page).then(data => {
    response = data;
  
    

    if(response.STATUS==200 && response.STATUS_MSG=="SUCCESS"){

      let weeklyNotAssignedTargetsMember = response.RESULT;
      this.weeklyAssignedTargetsMemberList = response.RESULT;
      
      if( this.weeklyAssignedTargetsMemberList.length > 0){
        this.isDataAvailable = true;
      }
   }
   else if(response.STATUS==300 && response.STATUS_MSG=="NOT_FOUND"){
    this.noRecordsFound = true;
    this.isDataAvailable = true;
    this.presentToastWithOptions('No records found...','bottom');
  }
  else{
      this.presentToastWithOptions('Some Problem.Please try again later...','bottom');
  }
  

  },
    error => {
      console.log(error);
        console.log("Error on calorie assingment list");
    });

  }


/*
  loadData(event){
    this.isDataAvailable = true;
    this.page = this.page+1;
    setTimeout(() => {
      let response;
      this._httpRequestHandlerService.getWeeklyNotAssignedTargetsMemberList("CALORIE",this.page).then(data => {
      response = data;
      
      let weeklyNotAssignedTargetsMember = response.RESULT;
      let count = Object.keys(weeklyNotAssignedTargetsMember).length;
        
        for(let i=0; i<count ; i++) {
          this.weeklyAssignedTargetsMemberList.push(response.RESULT[i]);
        }

        if(count>0){
          this.isDataAvailable = true;
        }

      },
      error => {
        console.log(error);
          console.log("Error on fetching ");
      });
      event.target.complete();
      }, 1000);

  }
*/

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
