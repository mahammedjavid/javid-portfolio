import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyPlansRoutingModule } from './my-plans-routing.module';
import { MyPlansComponent } from './my-plans.component';


@NgModule({
  declarations: [
    MyPlansComponent
  ],
  imports: [
    CommonModule,
    MyPlansRoutingModule
  ]
})
export class MyPlansModule { }
