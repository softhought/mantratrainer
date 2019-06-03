import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TrainergenerateqrcodePage } from './trainergenerateqrcode.page';



const routes: Routes = [
  {
    path: '',
    component: TrainergenerateqrcodePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TrainergenerateqrcodePage]
})
export class TrainergenerateqrcodePageModule {}
