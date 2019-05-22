import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MemberMachineAssignmentPage } from './member-machine-assignment.page';
import { DirectivesModule } from 'src/app/directives/directives.module';


// const routes: Routes = [
//   {
//     path: '',
//     component: MemberMachineAssignmentPage
//   }
// ];


const routes: Routes = [
  {
    path: '',
    component: MemberMachineAssignmentPage,
    children: [
      {
        path: 'assignedmembertab',
        children: [
          {
            path: '',
            loadChildren: '../assignedmembertab/assignedmembertab.module#AssignedmembertabPageModule'
          }
        ]
      },
      {
        path: 'nonassignedmembertab',
        children: [
          {
            path: '',
            loadChildren: '../nonassignedmembertab/nonassignedmembertab.module#NonassignedmembertabPageModule'
          }
        ]
      },
      
      {
        path: '',
        redirectTo: '/member-machine-assignment/nonassignedmembertab',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/member-machine-assignment/nonassignedmembertab',
    pathMatch: 'full'
}
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DirectivesModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MemberMachineAssignmentPage]
})
export class MemberMachineAssignmentPageModule {}
