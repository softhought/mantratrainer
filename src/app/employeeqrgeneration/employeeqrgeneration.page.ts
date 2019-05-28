import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { ToastController, NavController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-employeeqrgeneration',
  templateUrl: './employeeqrgeneration.page.html',
  styleUrls: ['./employeeqrgeneration.page.scss'],
})
export class EmployeeqrgenerationPage implements OnInit {

  emplMobileForm: FormGroup;
  isdLoaderEnable = false;
  private employeeMbl;
  public employeeQRCode: string = null;
  
  constructor(private _authservice:AuthService,public toastController: ToastController,private storage: Storage) { 
    this.emplMobileForm = new FormGroup({
      emplMobileNo: new FormControl('',Validators.required),
    });

    storage.get('employeemobile').then((employeemobile) => {
     this.employeeMbl = employeemobile;
    });
  }

  ngOnInit() {
  }


  verifyMbl(){
    alert("Mobile "+ this.employeeMbl);
   
    this.isdLoaderEnable = true;
   
    if(this.emplMobileForm.get('emplMobileNo').value!="") {

        let response;
        this._authservice.verifyMobile(this.emplMobileForm.value).then(data => {
        response = data;
        this.isdLoaderEnable = false;
        if(response.STATUS==200 && response.STATUS_MSG=="SUCCESS"){
          this.employeeQRCode = this.emplMobileForm.get('emplMobileNo').value;
          this.storage.set("employeemobile",this.emplMobileForm.get('emplMobileNo').value);
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
      this.isdLoaderEnable = false;
    }
   

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
