import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OtherModuleRoutingModule } from './other-module-routing.module';
import { OtherModuleComponent } from './other-module.component';


@NgModule({
  declarations: [
    OtherModuleComponent
  ],
  imports: [
    CommonModule,
    OtherModuleRoutingModule
  ]
})
export class OtherModuleModule { }
