import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MainmenuPage } from './mainmenu.page';



const routes: Routes = [
  {
    path: '',
    component: MainmenuPage,
    children:[
      {
         path: 'dashboard',
         loadChildren: '../dashboard/dashboard.module#DashboardPageModule' 
      },
      {
        path: 'mainmenu/first',
        loadChildren: '../bottomtabmenus/bottomtabmenus.module#BottomtabmenusPageModule' 
     },
     {
      path: 'trainer/calorieassignment',
      loadChildren: '../membercalorietargetassignmentlist/membercalorietargetassignmentlist.module#MembercalorietargetassignmentlistPageModule' 
     },
     {
        path:'',
        redirectTo:'/mainmenu/dashboard'
     }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MainmenuPage]
})
export class MainmenuPageModule {}
