import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RoleoptionmainviewPage } from './roleoptionmainview.page';

const routes: Routes = [
  {
    path: '',
    component: RoleoptionmainviewPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RoleoptionmainviewPage]
})
export class RoleoptionmainviewPageModule {}
