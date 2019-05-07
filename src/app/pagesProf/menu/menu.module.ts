import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';
import { ScrollHideModule } from 'src/app/directives/scroll-hide.module';

const routes: Routes = [
  {
    path: 'prof',
    component: MenuPage,
    children: [
      {
        path: 'home',
        loadChildren: 'src/app/pagesProf/home/home.module#HomePageModule'
      },
      {
        path: 'profile',
        loadChildren:
          'src/app/pagesProf/profile/profile.module#ProfilePageModule'
      },
      {
        path: 'parametres',
        loadChildren:
          'src/app/parametres/parametres.module#ParametresPageModule'
      },
      {
        path: 'fees',
        loadChildren: 'src/app/pagesProf/fees/fees.module#FeesPageModule'
      },
      {
        path: 'internships',
        loadChildren:
          'src/app/pagesProf/internships/internships.module#InternshipsPageModule'
      },
      {
        path: 'internship-details/:id',
        loadChildren:
          'src/app/pagesProf/internship-details/internship-details.module#InternshipDetailsPageModule'
      },
      {
        path: 'feeds',
        loadChildren: 'src/app/pagesProf/feeds/feeds.module#FeedsPageModule'
      },
      {
        path: 'evaluations',
        loadChildren:
          'src/app/pagesProf/evaluations/evaluations.module#EvaluationsPageModule'
      },
      {
        path: 'students',
        loadChildren:
          'src/app/pagesProf/students/students.module#StudentsPageModule'
      },
      {
        path: 'documents',
        loadChildren:
          'src/app/pagesProf/documents/documents.module#DocumentsPageModule'
      },
      {
        path: 'calendars',
        loadChildren:
          'src/app/pagesProf/calendars/calendars.module#CalendarsPageModule'
      },
      {
        path: 'galerie',
        loadChildren:
          'src/app/pagesProf/galerie/galerie.module#GaleriePageModule'
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScrollHideModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}
