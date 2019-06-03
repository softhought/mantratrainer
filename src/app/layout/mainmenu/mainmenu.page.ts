import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { LoadingController } from '@ionic/angular';



@Component({
  selector: 'app-mainmenu',
  templateUrl: './mainmenu.page.html',
  styleUrls: ['./mainmenu.page.scss'],
})
export class MainmenuPage implements OnInit {

  pages = [
    {
      title:'Dashboard',
      url:'/mainmenu/dashboard'
    },
    {
      title:'Calorie Assingment',
      url:'/mainmenu/trainer/calorieassignment'
    },
    {
      title:'Assigned Calorie List',
      url:'/mainmenu/trainer/assignedcaloriememberlist'
    },
  ];

  selectedPath = '';

  constructor(private router:Router,public navCtrl: NavController,private storage:Storage,public loadingController: LoadingController) { 
    this.router.events.subscribe((event:RouterEvent) => {
      this.selectedPath = event.url;
    });
  }

  ngOnInit() {
    // this.router.events.subscribe((event:RouterEvent) => {
    //   this.selectedPath = event.url;
    // });
  }


  setRootPage(url){
   // this.router.navigateByUrl(url);
    this.navCtrl.navigateRoot(url);

  }

  // logout() {
  //   this.storage.remove('is_logged_in');
  //   //this.storage.remove('registeredmobile');
  //   this.storage.remove('token');
  //   this.setRootPage('roleoptionmainview');
  // }

  async logout() {
    const loading = await this.loadingController.create({
      message: 'Logout in process',
      duration: 5000,
      spinner:'bubbles',
      translucent: true
    });
    await loading.present();
   
    this.storage.remove('is_logged_in');
    //this.storage.remove('registeredmobile');
    this.storage.remove('token');
    this.setRootPage('roleoptionmainview');
    
    loading.dismiss();

  }
}
