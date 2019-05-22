import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BottomtabmenusPage } from './bottomtabmenus.page';
import { FirsttabPageModule } from './tabdetails/firsttab/firsttab.module';
import { SecondtabPageModule } from './tabdetails/secondtab/secondtab.module';
SecondtabPageModule


const routes: Routes = [
  {
    path: 'tabs',
    component: BottomtabmenusPage,
    children:[
      {
        path:'tab1',
        loadChildren:'./tabdetails/firsttab/firsttab.module#FirsttabPageModule'
      },

      {
        path:'tab2',
        loadChildren:'./tabdetails/secondtab/secondtab.module#SecondtabPageModule'
      },
    ]
  },
  {
    path:'',
    redirectTo:'tabs/tab1',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BottomtabmenusPage]
})
export class BottomtabmenusPageModule {}
