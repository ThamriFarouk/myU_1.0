import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { InternshipDetailsPage } from './internship-details.page';
import { ScrollHideModule } from 'src/app/directives/scroll-hide.module';

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
    ScrollHideModule,
    RouterModule.forChild(routes)
  ],
  declarations: [InternshipDetailsPage]
})
export class InternshipDetailsPageModule {}
