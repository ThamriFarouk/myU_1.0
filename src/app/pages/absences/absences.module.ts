import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AbsencesPage } from './absences.page';
import { EliminationsPage } from '../eliminations/eliminations.page';
import { EliminationsPageModule } from '../eliminations/eliminations.module';
import { ScrollHideModule } from 'src/app/directives/scroll-hide.module';

const routes: Routes = [
  {
    path: '',
    component: AbsencesPage
  },
  {
    path: 'eliminations',
    loadChildren: '../eliminations/eliminations.module#eliminationPageModule'
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
  declarations: [AbsencesPage, EliminationsPage]
})
export class AbsencesPageModule {}
