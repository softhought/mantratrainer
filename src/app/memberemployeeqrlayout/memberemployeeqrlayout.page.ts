import { Component, OnInit } from '@angular/core';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { Platform } from '@ionic/angular';


@Component({
  selector: 'app-memberemployeeqrlayout',
  templateUrl: './memberemployeeqrlayout.page.html',
  styleUrls: ['./memberemployeeqrlayout.page.scss'],
})
export class MemberemployeeqrlayoutPage implements OnInit {

  qr_scanner:any;
 

  constructor(private qrScanner: QRScanner,public platform:Platform) {

    // Dismiss QR When Back button is pressed
    this.platform.backButton.subscribeWithPriority(0,() => {
      document.getElementsByTagName("body")[0].style.opacity = "1";
      this.qr_scanner.unsubscribe();
    });

   }

  ngOnInit() {
  }

  openQRScanner(scanfor,timetag){
    
        // Optionally request the permission early
        this.qrScanner.prepare()
        .then((status: QRScannerStatus) => {
          if (status.authorized) {
            // camera permission was granted
            this.qrScanner.show();
            
            document.getElementsByTagName("body")[0].style.opacity = "0";

            // start scanning
            
            this.qr_scanner = this.qrScanner.scan().subscribe((text: string) => {
          
              document.getElementsByTagName("body")[0].style.opacity = "1";
              
              
              //this.qrScanner.hide(); // hide camera preview
              this.qr_scanner.unsubscribe(); // stop scanning
              console.log('Scanned something', text);
              alert("Scanned data "+text);
            });

          } else if (status.denied) {
            // camera permission was permanently denied
            // you must use QRScanner.openSettings() method to guide the user to the settings page
            // then they can grant the permission from there
          } else {
            // permission was denied, but not permanently. You can ask for permission again at a later time.
          }
        })
        .catch((e: any) => console.log('Error is', e));

  }

}
