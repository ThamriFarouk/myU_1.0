import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './pagesStudent/menu/menu.module#MenuPageModule'
  },
  {
    path: 'login',
    loadChildren: './login/login.module#LoginPageModule'
  },
  {
    path: 'test',
    loadChildren: './pagesProf/test/test.module#TestPageModule'
  },
  {
    path: '',
    loadChildren: './pagesProf/menu/menu.module#MenuPageModule'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
