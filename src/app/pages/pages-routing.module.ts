import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanGuard } from '../guards/plan.guard';

const routes: Routes = [
  { path: '', redirectTo: '_hello',pathMatch : 'full' },
  {
    path: '_hello',
    loadChildren: () =>
      import('../pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: '_projects',
    loadChildren: () =>
      import('../pages/projects/projects.module').then((m) => m.ProjectsModule),
  },
  {
    path: '_contact-me',
    loadChildren: () =>
      import('../pages/contact/contact.module').then((m) => m.ContactModule),
  },
  {
    path: '_about-me',
    loadChildren: () =>
      import('../pages/about/about.module').then((m) => m.AboutModule),
  },
  {
    path: '_more',
    loadChildren: () =>
      import('../pages/other-module/other-module.module').then((m) => m.OtherModuleModule),
  },
  {
    path: '_login',
    loadChildren: () =>
      import('../pages/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: '_plans',
    loadChildren: () =>
      import('../pages/plans/plans.module').then((m) => m.PlansModule),
      canActivate: [PlanGuard],
  },
  {
    path: '_activity',
    loadChildren: () =>
      import('../pages/group-activity/group-activity.module').then((m) => m.GroupActivityModule),
      canActivate: [PlanGuard],
  },
  {
    path: '_my-plans',
    loadChildren: () =>
      import('../pages/my-plans/my-plans.module').then((m) => m.MyPlansModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers : [PlanGuard],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
