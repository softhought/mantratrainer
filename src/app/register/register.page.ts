import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  @ViewChild('registerSlider') registerSlider: any;

  emplMobileForm: FormGroup;
  emplMobileOTPForm: FormGroup;
  emplsetPinForm: FormGroup;

  isOtpSendLoaderEnable = false;
  isOtpVerifyLoaderEnable = false;
  isSetPinLoaderEnable = false;

  constructor(private router:Router,private navCtrl:NavController,private _authservice:AuthService,public toastController: ToastController,private storage: Storage) {

  
    this.emplMobileForm = new FormGroup({
      emplMobileNo: new FormControl('',Validators.required),
    });

    this.emplMobileOTPForm = new FormGroup({
      emplVerifyOTP: new FormControl('',Validators.required),
    });

    this.emplsetPinForm = new FormGroup({
      emplSetPin: new FormControl('',Validators.required),
    });
    

   }

  ngOnInit() {

    
   
    //this.registerSlider.lockSwipes(true);
  }


  verifyMblAndSendOTP(){
   
    this.isOtpSendLoaderEnable = true;
   
    if(this.emplMobileForm.get('emplMobileNo').value!="") {

        let response;
        this._authservice.sendOTP(this.emplMobileForm.value).then(data => {
        response = data;
        this.isOtpSendLoaderEnable = false;
        if(response.STATUS==200 && response.STATUS_MSG=="SUCCESS"){
          this.sliderNextControll();
        }
        else if(response.STATUS==300 && response.STATUS_MSG=="NOT_FOUND"){
          this.presentToastWithOptions('Mobile no is not registered','bottom');
        }
        else{
          this.presentToastWithOptions('Some Problem.Please try again later...','bottom');
        }
       },
        error => {
          console.log(error);
            console.log("Error on sending otp");
        });
       
    }
    else{
      this.presentToastWithOptions('Please enter mobile number','bottom');
      this.isOtpSendLoaderEnable = false;
    }
   

  }




  verifyOTP(){
    this.isOtpVerifyLoaderEnable = true;
    let response;
    this._authservice.verifyOTP(this.emplMobileForm.value,this.emplMobileOTPForm.value).then(data => {
    response = data;

      if(response.STATUS==200 && response.STATUS_MSG=="SUCCESS"){
        this.sliderNextControll();
      }
      else if(response.STATUS==444 && response.STATUS_MSG=="OTP_EXPIRED"){
        this.presentToastWithOptions('OTP Expired. Try to send again...','bottom');
      }
      else if(response.STATUS==444 && response.STATUS_MSG=="OTP_MISMATCH"){
        this.presentToastWithOptions('OTP mismatch.','bottom');
      }
      else{
        this.presentToastWithOptions('Some Problem.Please try again later...','bottom');
      }
      this.isOtpVerifyLoaderEnable = false;
    },
       error => {
        console.log(error);
        console.log("Error from login attempt");
     });
  }

  setLoginPin(){
    let mblno = this.emplMobileForm.get('emplMobileNo').value;
    
    this.isSetPinLoaderEnable = true;
    let response;
    this._authservice.setloginPin(this.emplMobileForm.value,this.emplMobileOTPForm.value,this.emplsetPinForm.value).then(data => {
    response = data;
    if(response.STATUS==200 && response.STATUS_MSG=="SUCCESS"){
        this.storage.clear();
        let mblno = this.emplMobileForm.get('emplMobileNo').value;
        this.storage.set('registeredmobile', mblno);
        this.navCtrl.navigateForward('login');
    
    }
    else{
      this.presentToastWithOptions('Some Problem.Please try again later...','bottom');
    }

    this.isSetPinLoaderEnable = false;
    },
       error => {
        console.log("Error from login attempt");
     });
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


  sliderNextControll(){
    this.registerSlider.lockSwipes(false) 
    this.registerSlider.slideNext(200);
    this.registerSlider.lockSwipes(true);
  }

  sliderPrevControll(){
    this.registerSlider.lockSwipes(false) 
    this.registerSlider.slidePrev(200);
    this.registerSlider.lockSwipes(true);
  }

  gotologin(){
    this.navCtrl.navigateForward('login');
  }

}
