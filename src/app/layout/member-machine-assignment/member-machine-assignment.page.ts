import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SwipetabDirective } from 'src/app/directives/swipetab.directive';
import { IonTabs } from '@ionic/angular';
import { DataShareService } from 'src/app/services/data-share.service';




@Component({
  selector: 'app-member-machine-assignment',
  templateUrl: './member-machine-assignment.page.html',
  styleUrls: ['./member-machine-assignment.page.scss'],
})
export class MemberMachineAssignmentPage {

  serviceData:any ;
  @ViewChild(SwipetabDirective) swipetabDirective: SwipetabDirective;
  @ViewChild('memberExreciseTrackerTab') tabRef: IonTabs;


  constructor(public activatedRoute : ActivatedRoute , private _dataShareService:DataShareService) {}

 


  ionTabsDidChange($event) {
    // console.log($event);
    // console.log('[TabsPage] ionTabsDidChange, $event:', $event);
    // console.log("Tab Name is "+$event.tab);
    this.swipetabDirective.onTabInitialized($event.tab);
  }

  onTabChange($event) {
    // console.log("Tab Change Clicked");
    // console.log('[TabsPage] onTabChange, $event:', $event);
    this.tabRef.select($event);
 }



}
