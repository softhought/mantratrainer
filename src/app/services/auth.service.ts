import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalconstantService } from './globalconstant.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public http: HttpClient,private global:GlobalconstantService) { }

  signInVerification(formData){

    let loginData = JSON.stringify({formData});
    return new Promise(resolve => {
       this.http.post(this.global.signin,formData).subscribe(data => {
         resolve(data);
        
       }, err => {
         console.log(err);
       });
     });
  }


  sendOTP(formData){
    let formValues = JSON.stringify({formData:formData});
    return new Promise(resolve => {
      this.http.post(this.global.sendotp_URL,formValues).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  verifyOTP(mobileForm,otpForm){
    let formValues = JSON.stringify({mobileInfo:mobileForm,otpInfo:otpForm});
    return new Promise(resolve => {
      this.http.post(this.global.verifyotp_URL,formValues).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  setloginPin(mobileForm,otpForm,setpinForm){
    let formValues = JSON.stringify({mobileInfo:mobileForm,otpInfo:otpForm,pinInfo:setpinForm});
    return new Promise(resolve => {
      this.http.post(this.global.setloginpin_URL,formValues).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  verifyLogin(loginForm){
    let formValues = JSON.stringify({loginInfo:loginForm});
    return new Promise(resolve => {
      this.http.post(this.global.login_URL,formValues).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
  

  verifyMobile(formData){
    let formValues = JSON.stringify({formData:formData});
    return new Promise(resolve => {
      this.http.post(this.global.verifymobile_URL,formValues).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

}
