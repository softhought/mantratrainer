import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { NavController } from '@ionic/angular';
NavController

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
  ];

  selectedPath = '';

  constructor(private router:Router,public navCtrl: NavController,) { 
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
}
