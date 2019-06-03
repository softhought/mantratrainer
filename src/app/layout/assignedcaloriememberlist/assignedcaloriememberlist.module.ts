import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AssignedcaloriememberlistPage } from './assignedcaloriememberlist.page';

const routes: Routes = [
  {
    path: '',
    component: AssignedcaloriememberlistPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AssignedcaloriememberlistPage]
})
export class AssignedcaloriememberlistPageModule {}
