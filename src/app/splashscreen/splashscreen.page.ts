import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NavController } from '@ionic/angular';




@Component({
  selector: 'app-splashscreen',
  templateUrl: './splashscreen.page.html',
  styleUrls: ['./splashscreen.page.scss'],
 // encapsulation: ViewEncapsulation.None
})
export class SplashscreenPage implements OnInit {
  slideOpts = {
    effect: 'flip'
  };
  constructor(private navCtrl:NavController) { }

  ngOnInit() {
  }

  gotoRegistration() {
    this.navCtrl.navigateForward('register');
  }

  gotologin() {
    this.navCtrl.navigateForward('login');
  }

}
