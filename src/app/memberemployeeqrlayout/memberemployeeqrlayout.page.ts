import { Component, OnInit } from '@angular/core';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { Platform } from '@ionic/angular';
import { HttpRequestHandlerService } from 'src/app/services/http-request-handler.service';
import { NavController, ToastController  } from '@ionic/angular';


@Component({
  selector: 'app-memberemployeeqrlayout',
  templateUrl: './memberemployeeqrlayout.page.html',
  styleUrls: ['./memberemployeeqrlayout.page.scss'],
})
export class MemberemployeeqrlayoutPage implements OnInit {

  qr_scanner:any;

  qrCodeScannedValue:any;
  attendanceDoneFor:string=null;
  attendanceType:string=null;
 

  constructor(private qrScanner: QRScanner,public platform:Platform,private _httpRequestHandlerService:HttpRequestHandlerService,public toastController: ToastController) {

    // Dismiss QR When Back button is pressed
    this.platform.backButton.subscribeWithPriority(0,() => {
      document.getElementsByTagName("body")[0].style.opacity = "1";
      this.qr_scanner.unsubscribe();
    });

   }

  ngOnInit() {
  }

  openQRScanner(scanfor,type){

        this.attendanceDoneFor = scanfor;
        this.attendanceType = type;

        console.log("this.attendanceDoneFor "+this.attendanceDoneFor);
        console.log("this.attendanceType "+this.attendanceType);

        // Optionally request the permission early
        this.qrScanner.prepare()
        .then((status: QRScannerStatus) => {
          if (status.authorized) {
            // camera permission was granted
            this.qrScanner.show();
            
            document.getElementsByTagName("body")[0].style.opacity = "0";

            // start scanning
            
            this.qr_scanner = this.qrScanner.scan().subscribe((text: string) => {
              this.qrCodeScannedValue = text;
              
              document.getElementsByTagName("body")[0].style.opacity = "1";
              console.log('Scan Completed', text); 
              this.captureAttendance(this.attendanceDoneFor,this.attendanceType,this.qrCodeScannedValue); //
              //this.qrScanner.hide(); // hide camera preview
              this.qr_scanner.unsubscribe(); // stop scanning


           

            
             // alert("Scanned data "+text);
            });

          } else if (status.denied) {
            // camera permission was permanently denied
            // you must use QRScanner.openSettings() method to guide the user to the settings page
            // then they can grant the permission from there
          } else {
            //this.presentToastWithOptions("Permission Denied.",'bottom');
            // permission was denied, but not permanently. You can ask for permission again at a later time.
          }
        })
        .catch((e: any) => console.log('Error is', e));

  }


 

  captureAttendance(attFor,attType,scanResult){

    let formData = {
      'att_for' : attFor,
      'att_type' : attType,
      'value' : scanResult
    };
    
    let response;
    this._httpRequestHandlerService.captureAttendance(formData).then((data: any) => {

      if(data.STATUS==200 && data.STATUS_MSG=="SUCCESS"){
        response = data.RESULT;
        this.presentToastWithOptions("Successfully Done",'bottom');
      }
      else if(data.STATUS==300 && data.STATUS_MSG=="NOT_FOUND"){
        this.presentToastWithOptions(data.MSG_DESC,'bottom');
      }
      else{
        this.presentToastWithOptions("Problem Occured.Try again ...",'bottom');
      }
    }, (error) => {
      console.log(error);
    })


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
