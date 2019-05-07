import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './pages/menu/menu.module#MenuPageModule'
  },
  {
    path: 'login',
    loadChildren: './newPages/login/login.module#LoginPageModule'
  },
  {
    path: 'test',
    loadChildren: './newPages/test/test.module#TestPageModule'
  },
  // {
  //   path: '',
  //   loadChildren: './newPages/home/home.module#HomePageModule'
  // },
  {
    path: '',
    loadChildren: './newPages/menu/menu.module#MenuPageModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
