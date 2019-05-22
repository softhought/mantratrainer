import { Component, OnInit } from '@angular/core';
import { HttpRequestHandlerService } from 'src/app/services/http-request-handler.service';
import { NavController, ToastController  } from '@ionic/angular';
import { Router } from '@angular/router';
import { DataShareService } from 'src/app/services/data-share.service';


@Component({
  selector: 'app-nonassignedmembertab',
  templateUrl: './nonassignedmembertab.page.html',
  styleUrls: ['./nonassignedmembertab.page.scss'],
})
export class NonassignedmembertabPage implements OnInit {


  page = 1;
  perPage = 0;
  totalData = 0;
  totalPage = 0;
  todaysMemberList = [];

  selectedBranch;

  serviceData:string="";
  isListDataAvailable:boolean = false;

  constructor(private _httpReqHandler:HttpRequestHandlerService,private navCtrl :NavController,public toastController: ToastController,private router:Router,private _dataShareService:DataShareService) { 
  
    this.serviceData = this._dataShareService.getSelectedExerciseDatas();
    console.log(this.serviceData);
    this.selectedBranch = this._dataShareService.getSelectedExerciseDatas().branchcode;
    console.log(this.selectedBranch);
  }

  ngOnInit() {
    this.getTodaysMemberList();
  }

  ionViewWillEnter(){
    this.getTodaysMemberList();
  }


  getTodaysMemberList(){
    let response;
    this._httpReqHandler.getTodaysMemberList(this.selectedBranch,this.page).then(data => {
    response = data;
  
    

    if(response.STATUS==200 && response.STATUS_MSG=="SUCCESS"){

      this.todaysMemberList = response.RESULT;

      if(this.todaysMemberList.length > 0) {
        this.isListDataAvailable = true;
      }

      console.log("todaysMemberList List");
      console.log(this.todaysMemberList);
      console.log("todaysMemberList List End");

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

  loadData(event){
    this.page = this.page+1;
   
      this.isListDataAvailable = false;
  
  
     setTimeout(() => {
      
      let response;
      this._httpReqHandler.getTodaysMemberList(this.selectedBranch,this.page).then(data => {
      response = data;
  
        console.log(response.RESULT);
        console.log("Length is "+ response.RESULT.length);
        
        //this.todaysMemberList.push(response.RESULT[0]);
         for(let i=0; i<response.RESULT.length; i++) {
          this.todaysMemberList.push(response.RESULT[i]);
         }

         if(response.RESULT.length > 0) {
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


  goToMemberAssignment(member){
    this._dataShareService.setSelectedMemberDatas(member);
    this.router.navigate(['/memberassignment-profile']);
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
