import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ExerciseselectionPage } from './exerciseselection.page';

const routes: Routes = [
  {
    path: '',
    component: ExerciseselectionPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ExerciseselectionPage]
})
export class ExerciseselectionPageModule {}
