import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { InternshipDetailsPage } from './internship-details.page';

const routes: Routes = [
  {
    path: '',
    component: InternshipDetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [InternshipDetailsPage]
})
export class InternshipDetailsPageModule {}
