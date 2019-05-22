import { Component, OnInit } from '@angular/core';
import { HttpRequestHandlerService } from 'src/app/services/http-request-handler.service';
import { NavController, ToastController  } from '@ionic/angular';
import { Router } from '@angular/router';
import { DataShareService } from 'src/app/services/data-share.service';



@Component({
  selector: 'app-branchselection',
  templateUrl: './branchselection.page.html',
  styleUrls: ['./branchselection.page.scss'],
  
})
export class BranchselectionPage implements OnInit {

  allBranchList = [];
  selectedBranch = null;
  isListDataAvailable:boolean = false;

  constructor(private _httpReqHandler:HttpRequestHandlerService,private navCtrl :NavController,public toastController: ToastController,private router:Router,private _dataShareService:DataShareService) { }

  ngOnInit() {
    this.getBranchList();
  }


  getBranchList(){
    let response;
    this._httpReqHandler.getAllBranchList().then(data => {
    response = data;

    if(response.STATUS==200 && response.STATUS_MSG=="SUCCESS"){
        this.allBranchList = response.RESULT;
        if(this.allBranchList.length > 0){
          this.isListDataAvailable = true;
        }
        
    }
    else {
      this.presentToastWithOptions('Some Problem.Please try again later...','bottom');
    }
  

  },
    error => {
      console.log(error);
        console.log("Error on branch list");
    });
  }

  getSelectedBranch(event){
    this.selectedBranch = event.detail.value;
  }

  next() {

    const branchObj = {
        branchcode: this.selectedBranch
      }

      this._dataShareService.setSelectedBranchDatas(branchObj);
      this.router.navigate(['/choose-exercise']);

    // this.router.navigate(['/member-machine-assignment'],{
    //   queryParams: object,
    //   });

     // this.router.navigate(['/tabs']);
     // this.router.navigate(['/member-machine-assignment']);

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
