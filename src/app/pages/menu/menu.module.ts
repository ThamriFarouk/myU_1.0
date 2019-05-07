import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';
import { ScrollHideModule } from 'src/app/directives/scroll-hide.module';

const routes: Routes = [
  {
    path: 'student',
    component: MenuPage,
    children: [
      {
        path: 'home',
        loadChildren: '../home/home.module#HomePageModule'
      },
      {
        path: 'parametres',
        loadChildren: '../parametres/parametres.module#ParametresPageModule'
      },
      {
        path: 'teacherDetails/:id/:name',
        loadChildren:
          '../list-teachers/teacher-details/teacher-details.module#TeacherDetailsPageModule'
      },
      {
        path: 'absences',
        loadChildren: '../absences/absences.module#AbsencesPageModule'
      },
      {
        path: 'notes',
        loadChildren: '../notes/notes.module#NotesPageModule'
      },
      {
        path: 'results',
        loadChildren: '../results/results.module#ResultsPageModule'
      },
      {
        path: 'internships',
        loadChildren: '../internships/internships.module#InternshipsPageModule'
      },
      {
        path: 'internship-details/:id',
        loadChildren:
          '../internship-details/internship-details.module#InternshipDetailsPageModule'
      },
      {
        path: 'teachers',
        loadChildren: '../teachers/teachers.module#TeachersPageModule'
      },
      {
        path: 'feeds',
        loadChildren: '../feeds/feeds.module#FeedsPageModule'
      },
      {
        path: 'documents',
        loadChildren: '../documents/documents.module#DocumentsPageModule'
      },
      {
        path: 'calendars',
        loadChildren: '../calendars/calendars.module#CalendarsPageModule'
      },
      {
        path: 'galerie',
        loadChildren: '../galerie/galerie.module#GaleriePageModule'
      }
    ]
  }
  // {
  //   path: 'login',
  //   loadChildren: '../login/login.module#LoginPageModule'
  // },
  // {
  //   path: '',
  //   redirectTo: '/etudiant/home'
  // }
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
