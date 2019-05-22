import { Component, OnInit } from '@angular/core';
import { HttpRequestHandlerService } from 'src/app/services/http-request-handler.service';
import { NavController, ToastController  } from '@ionic/angular';
import { Router } from '@angular/router';
import { DataShareService } from 'src/app/services/data-share.service';


@Component({
  selector: 'app-exerciseselection',
  templateUrl: './exerciseselection.page.html',
  styleUrls: ['./exerciseselection.page.scss'],
})
export class ExerciseselectionPage implements OnInit {

  exerciseList = [];
  selectedExercise;
  selectedbranch ;
  isListDataAvailable:boolean = false;


  constructor(private _httpReqHandler:HttpRequestHandlerService,private navCtrl :NavController,public toastController: ToastController,private router:Router,private _dataShareService:DataShareService) {
      this.selectedbranch = this._dataShareService.getSelectedBranchDatas().branchcode;
   }

  ngOnInit() {
    this.getExerciseList();
  }



  getExerciseList(){
    let response;
    this._httpReqHandler.getExerciseList().then(data => {
    response = data;
  
    

    if(response.STATUS==200 && response.STATUS_MSG=="SUCCESS") {
        this.exerciseList = response.RESULT;
        if(this.exerciseList.length > 0){
          this.isListDataAvailable = true;
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

  getSelectedExercise(event){
    this.selectedExercise = event.detail.value;
  }


 


  next(){
   
      let obj = {
        branchcode: this.selectedbranch,
        exerciseID: this.selectedExercise
      }
      this._dataShareService.setSelectedExerciseDatas(obj);

    // this.router.navigate(['/member-machine-assignment'],{
    //   queryParams: object,
    //   });

     // this.router.navigate(['/tabs']);
      this.router.navigate(['/member-machine-assignment']);

      /*
      this.router.navigate(['/tabs'],{
        queryParams: object,
        });
      */
   
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
