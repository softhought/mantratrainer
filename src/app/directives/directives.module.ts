import { NgModule } from '@angular/core';
import { SwipetabDirective } from './swipetab.directive';


@NgModule({
  declarations: [
    SwipetabDirective
  ],
  exports: [
    SwipetabDirective
  ]
})
export class DirectivesModule { }