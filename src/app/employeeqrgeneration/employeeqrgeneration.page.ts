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
  //isdLoaderEnable = false;
  isLoaderEnable = true;
  public employeeMbl: string = null;
  public employeeQRCode: string = null;
  isMobileNoVerified:boolean = false;

  isSubmitClicked = false;
  
  constructor(private _authservice:AuthService,public toastController: ToastController,private storage: Storage) { 
    this.emplMobileForm = new FormGroup({
      emplMobileNo: new FormControl('',Validators.required),
    });

   


  }

  ngOnInit() {
   // this.emplMobileForm.get('emplMobileNo').enable();
    this.storage.get('employeemobile').then((mbl) => {
      console.log("NgOnInit Console :: " + mbl);
      this.employeeMbl = mbl;

      if(this.employeeMbl == null){
        this.emplMobileForm.get('emplMobileNo').enable();
        this.isMobileNoVerified = false;
        this.employeeQRCode = "";
      }
      else{
        this.employeeQRCode = ""+this.employeeMbl; //because no is not working for qr code 
        console.log("this.employeeQRCode " + this.employeeQRCode);
        this.isLoaderEnable = false;

        this.emplMobileForm.patchValue({
          'emplMobileNo':this.employeeMbl
        });
        this.emplMobileForm.get('emplMobileNo').disable();

        this.isMobileNoVerified = true;
      }

     

     });
 
 
     
  }


  verifyMbl(){
    this.isSubmitClicked = true;
    this.isLoaderEnable = true;
    if(this.emplMobileForm.get('emplMobileNo').value!="") {

        let response;
        this._authservice.verifyMobile(this.emplMobileForm.value).then(data => {
        response = data;
        this.isLoaderEnable = false;
        if(response.STATUS==200 && response.STATUS_MSG=="SUCCESS"){

          this.isLoaderEnable = false;
          this.employeeQRCode = ""+this.emplMobileForm.get('emplMobileNo').value;
          this.storage.set("employeemobile",this.emplMobileForm.get('emplMobileNo').value);
          this.isMobileNoVerified = true;
          this.isSubmitClicked = false;
        }
        else if(response.STATUS==300 && response.STATUS_MSG=="NOT_FOUND"){
          this.employeeQRCode = null;
          this.isSubmitClicked = false;
          this.presentToastWithOptions('Mobile no is not registered','bottom');
         

        }
        else{
          this.employeeQRCode = null;
          this.isSubmitClicked = false;
          this.presentToastWithOptions('Some Problem.Please try again later...','bottom');
          
        }

       

       },
        error => {
          console.log(error);
            console.log("Error on qr scanner display");
            this.isSubmitClicked = false;
        });
       
    }
    else{
      this.employeeQRCode = null;
      this.presentToastWithOptions('Please enter mobile number','bottom');
      this.isSubmitClicked = false;
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
