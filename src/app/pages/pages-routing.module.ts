import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
