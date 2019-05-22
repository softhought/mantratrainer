import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
//import { Keyboard } from '@ionic-native/keyboard/ngx';
import { MenuController } from '@ionic/angular'; 

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public menuCtrl: MenuController
   // private keyboard: Keyboard
  ) {
    this.initializeApp();
    this.statusBar.overlaysWebView(true);
    //this.statusBar.backgroundColorByHexString('#ffffff');
    this.statusBar.styleLightContent();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
   //   this.keyboard.hideFormAccessoryBar(false);
    });
  }

  toggleMenu() {
    this.menuCtrl.toggle(); //Add this method to your button click function
  }
  
}
