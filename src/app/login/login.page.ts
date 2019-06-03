import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  registeredMobileNo:number;
  loginForm: FormGroup;
  isLoginLoaderEnable:boolean = false;

  constructor(private navCtrl :NavController,private storage:Storage,private _authservice:AuthService,public toastController: ToastController) { 
    console.log("Registered Mobile");
    

    this.loginForm = new FormGroup({
      loginPinCtrl: new FormControl('',Validators.required),
      regMbl: new FormControl('',Validators.required)
    });





  }

  ngOnInit() {
        this.storage.get('registeredmobile').then((regmobile) => {
      console.log("Registered Mobile No " + regmobile);
      console.log(regmobile);
      this.registeredMobileNo = regmobile;
      this.loginForm.patchValue({
        regMbl: regmobile
      });
    });
  }


  loginToDashboard(){
    this.isLoginLoaderEnable = true;
    if(this.loginForm.get('regMbl').value==""){
      this.presentToastWithOptions('First Set your pin. By clicking Register now.','bottom');
    }
    else{
        if(this.loginForm.get('loginPinCtrl').value!="") {
          let response;
          this._authservice.verifyLogin(this.loginForm.value).then(data => {
          response = data;
         
          
      
          if(response.STATUS==200 && response.STATUS_MSG=="SUCCESS"){

            this.storage.set("is_logged_in",true);
            this.storage.set("token",response.TOKEN);


              // Note :: jwt-decode already installed will use later for decode

              console.log("Response Token");
              console.log(response.TOKEN);
              console.log("Response Token End");


            this.navCtrl.navigateRoot('mainmenu');
          }
          else if(response.STATUS==100 && response.STATUS_MSG=="INVALID_AUTH"){
            this.presentToastWithOptions('Invalid pin.Please check your pin.','bottom');
          }
          else if(response.STATUS==300 && response.STATUS_MSG=="VALIDATION_REQ"){
            this.presentToastWithOptions('Pin is required','bottom');
          }
          else{
            this.presentToastWithOptions('Some Problem.Please try again later...','bottom');
          }
          this.isLoginLoaderEnable = false;

        },
          error => {
            console.log(error);
              console.log("Error on login");
          });
        
      }
      else{
        this.presentToastWithOptions('Please enter your pin','bottom');
        this.isLoginLoaderEnable = false;
      }
    }

   
  }


  gotoRegistration() {
    this.navCtrl.navigateForward('register');
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
