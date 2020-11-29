import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../../app-routing.module';
import { SuplyFormComponent } from './suply-form/suply-form.component';
import { SuplyListComponent } from './suply-list/suply-list.component';
import { SuplyRoutingModule } from './suply-routing.module';



@NgModule({
  declarations: [SuplyFormComponent, SuplyListComponent],
  imports: [
    CommonModule,
    SuplyRoutingModule,
    AppRoutingModule
  ]
})
export class SuplyModule { }
