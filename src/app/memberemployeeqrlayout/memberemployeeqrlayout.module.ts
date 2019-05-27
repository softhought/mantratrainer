import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MemberemployeeqrlayoutPage } from './memberemployeeqrlayout.page';

const routes: Routes = [
  {
    path: '',
    component: MemberemployeeqrlayoutPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MemberemployeeqrlayoutPage]
})
export class MemberemployeeqrlayoutPageModule {}
