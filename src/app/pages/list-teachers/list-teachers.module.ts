import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListTeachersPage } from './list-teachers.page';

const routes: Routes = [
  {
    path: '',
    component: ListTeachersPage,
    children: [
       {
         path: 'teacher-details/:id/:name',
         loadChildren: './teacher-details/teacher-details.module#TeacherDetailsPageModule'
       },
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListTeachersPage]
})
export class ListTeachersPageModule {}
