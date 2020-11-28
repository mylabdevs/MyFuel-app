import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CorStyleDirective } from './cor-style.directive';
import { FontStyleDirective } from './font-style.directive';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CorStyleDirective, FontStyleDirective],
  exports: [CorStyleDirective, FontStyleDirective]
})
export class CorStyleModule { }
