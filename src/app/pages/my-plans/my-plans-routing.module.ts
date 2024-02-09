import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyPlansComponent } from './my-plans.component';

const routes: Routes = [
  {
    path : '',
    component : MyPlansComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyPlansRoutingModule { }
