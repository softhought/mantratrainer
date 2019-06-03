import { Component, OnInit } from '@angular/core';
import { TrainergenerateqrcodePage } from '../trainergenerateqrcode/trainergenerateqrcode.page';
import { ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import * as jwt_decode from "jwt-decode";



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  trainerRegisterMobileNo;
  decodedTokenData;

  //Emloyee Declaration
  employeeName:string=null;
  employeeDesig:string=null;



  constructor(public modalController:ModalController,private storage:Storage) { }

  ngOnInit() {
  
    this.storage.get('registeredmobile').then((regmobile) => {
      this.trainerRegisterMobileNo = regmobile;
    });

    this.storage.get('token').then((tokenValue) => {
     this.decodedTokenData = this.getDecodedAccessToken(tokenValue);
    //  console.log("Decode Data Tokend");
    //  console.log(this.decodedTokenData);

     this.employeeName = this.decodedTokenData.data.emplName;
     this.employeeDesig = this.decodedTokenData.data.emplDesig;

    });

  }


  async showQRCode(){
    const modal = await this.modalController.create({
      component: TrainergenerateqrcodePage,
      componentProps: {
        'mobile': this.trainerRegisterMobileNo
      },
      animated:true,
      showBackdrop:true,
     });

    return await modal.present();
  }

  getDecodedAccessToken(token: string): any {
    try{
        return jwt_decode(token);
    }
    catch(Error){
        return null;
    }
  }


}
