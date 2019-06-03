import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DashboardPage } from './dashboard.page';
import { AppMaterialModule } from 'src/app/app-material/app-material.module';
import { TrainergenerateqrcodePage } from '../trainergenerateqrcode/trainergenerateqrcode.page';
import { QRCodeModule } from 'angularx-qrcode';

const routes: Routes = [
  {
    path: '',
    component: DashboardPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppMaterialModule,
    QRCodeModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DashboardPage,TrainergenerateqrcodePage],
  entryComponents:[TrainergenerateqrcodePage]
})
export class DashboardPageModule {}
