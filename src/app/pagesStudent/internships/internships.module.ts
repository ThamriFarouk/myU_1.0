import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { InternshipsPage } from './internships.page';
import { ScrollHideModule } from 'src/app/directives/scroll-hide.module';

const routes: Routes = [
  {
    path: '',
    component: InternshipsPage
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
  declarations: [InternshipsPage]
})
export class InternshipsPageModule {}
