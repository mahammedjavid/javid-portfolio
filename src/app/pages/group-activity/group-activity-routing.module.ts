import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupActivityComponent } from './group-activity.component';

const routes: Routes = [
  {
    path : ':planId',
    component : GroupActivityComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupActivityRoutingModule { }
