import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

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
      url:'trainer/calorieassignment'
    },
  ];

  selectedPath = '';

  constructor(private router:Router) { 
    this.router.events.subscribe((event:RouterEvent) => {
      this.selectedPath = event.url;
    });
  }

  ngOnInit() {
    // this.router.events.subscribe((event:RouterEvent) => {
    //   this.selectedPath = event.url;
    // });
  }

}
