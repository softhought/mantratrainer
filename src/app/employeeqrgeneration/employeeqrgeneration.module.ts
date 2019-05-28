import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EmployeeqrgenerationPage } from './employeeqrgeneration.page';
import { QRCodeModule } from 'angularx-qrcode';





const routes: Routes = [
  {
    path: '',
    component: EmployeeqrgenerationPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    QRCodeModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EmployeeqrgenerationPage]
})
export class EmployeeqrgenerationPageModule {}
