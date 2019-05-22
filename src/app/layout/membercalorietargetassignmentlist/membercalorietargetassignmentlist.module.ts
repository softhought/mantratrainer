import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MembercalorietargetassignmentlistPage } from './membercalorietargetassignmentlist.page';

const routes: Routes = [
  {
    path: '',
    component: MembercalorietargetassignmentlistPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MembercalorietargetassignmentlistPage]
})
export class MembercalorietargetassignmentlistPageModule {}
