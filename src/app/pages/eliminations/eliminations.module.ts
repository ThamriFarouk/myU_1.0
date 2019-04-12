import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EliminationsPage } from './eliminations.page';

const routes: Routes = [
  {
    path: '',
    component: EliminationsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    EliminationsPage,
  ],
  declarations: [EliminationsPage]
})
export class EliminationsPageModule {}
