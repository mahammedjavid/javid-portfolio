import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OtherModuleComponent } from './other-module.component';

const routes: Routes = [
  {
    path : '',
    component : OtherModuleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OtherModuleRoutingModule { }
