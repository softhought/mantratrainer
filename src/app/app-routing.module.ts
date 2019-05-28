import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'roleoptionmainview', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'splashscreen', loadChildren: './splashscreen/splashscreen.module#SplashscreenPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'mainmenu', loadChildren: './layout/mainmenu/mainmenu.module#MainmenuPageModule' },

  /*
  { path: 'tab1', loadChildren: './layout/tabmenu/tab1/tab1.module#Tab1PageModule' },
  { path: 'tab2', loadChildren: './layout/tabmenu/tab2/tab2.module#Tab2PageModule' },
 */

  { path: 'bottomtabmenus', loadChildren: './layout/bottomtabmenus/bottomtabmenus.module#BottomtabmenusPageModule' },
  { path: 'firsttab', loadChildren: './layout/bottomtabmenus/tabdetails/firsttab/firsttab.module#FirsttabPageModule' },
  { path: 'secondtab', loadChildren: './layout/bottomtabmenus/tabdetails/secondtab/secondtab.module#SecondtabPageModule' },
  { path: 'branchselection', loadChildren: './layout/branchselection/branchselection.module#BranchselectionPageModule' },
  { path: 'member-machine-assignment', loadChildren: './layout/member-machine-assignment/member-machine-assignment.module#MemberMachineAssignmentPageModule' },
  { path: 'choose-exercise', loadChildren: './layout/exerciseselection/exerciseselection.module#ExerciseselectionPageModule' },
  { path: 'memberassignment-profile', loadChildren: './layout/member_detail_assingment_layout/memberassignment-profile/memberassignment-profile.module#MemberassignmentProfilePageModule' },
  { path: 'roleoptionmainview', loadChildren: './roleoptionmainview/roleoptionmainview.module#RoleoptionmainviewPageModule' },
  { path: 'choosecategory', loadChildren: './memberemployeeqrlayout/memberemployeeqrlayout.module#MemberemployeeqrlayoutPageModule' },  { path: 'employeeqrgeneration', loadChildren: './employeeqrgeneration/employeeqrgeneration.module#EmployeeqrgenerationPageModule' },



 // { path: 'mainmenu/calorieassignment', loadChildren: './layout/membercalorietargetassignmentlist/membercalorietargetassignmentlist.module#MembercalorietargetassignmentlistPageModule' },

  //{ path: 'tabs', loadChildren: './layout/tabs/tabs.module#TabsPageModule' },

  /*
  { path: 'assignedmembertab', loadChildren: './layout/assignedmembertab/assignedmembertab.module#AssignedmembertabPageModule' },
  { path: 'nonassignedmembertab', loadChildren: './layout/nonassignedmembertab/nonassignedmembertab.module#NonassignedmembertabPageModule' },
 */
 
  /*
  { path: 'dashboard', loadChildren: './layout/dashboard/dashboard.module#DashboardPageModule' },
  { path: 'mainmenu', loadChildren: './layout/mainmenu/mainmenu.module#MainmenuPageModule' },
  */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
