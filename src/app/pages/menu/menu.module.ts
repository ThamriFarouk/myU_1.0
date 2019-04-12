import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';
import { ListTeachersPage } from '../list-teachers/list-teachers.page';

const routes: Routes = [
  {
    path: 'etudiant',
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
        loadChildren: '../list-teachers/teacher-details/teacher-details.module#TeacherDetailsPageModule'
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
         path: 'teachers',
         loadChildren: '../teachers/teachers.module#TeachersPageModule'
       },

    ]
  },
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
    RouterModule.forChild(routes)
  ],
  declarations: [MenuPage, ]
})
export class MenuPageModule {}
