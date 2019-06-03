import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-roleoptionmainview',
  templateUrl: './roleoptionmainview.page.html',
  styleUrls: ['./roleoptionmainview.page.scss'],
})
export class RoleoptionmainviewPage implements OnInit {

  constructor(public navCtrl: NavController,private router:Router) { }

  ngOnInit() {
  }

  redirectToUrl(tag)
  {
    if(tag=="QR"){
      this.router.navigateByUrl('choosecategory');
     // this.navCtrl.navigateRoot("choosecategory");
    }
    else if(tag=="EMPLOYEE"){
      this.router.navigateByUrl('employeeqrgeneration');
    }
    else if(tag=="TRAINER"){
      this.router.navigateByUrl('login');
    }
    else{
      // For Help
    }

  }

}
