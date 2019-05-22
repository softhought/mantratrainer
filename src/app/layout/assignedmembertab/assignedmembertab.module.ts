import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AssignedmembertabPage } from './assignedmembertab.page';

const routes: Routes = [
  {
    path: '',
    component: AssignedmembertabPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AssignedmembertabPage]
})
export class AssignedmembertabPageModule {}
