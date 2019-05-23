import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CalendarsPage } from './calendars.page';
import { ScrollHideModule } from 'src/app/directives/scroll-hide.module';
import { NgCalendarModule } from 'ionic2-calendar';


const routes: Routes = [
  {
    path: '',
    component: CalendarsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScrollHideModule,
    RouterModule.forChild(routes),
    NgCalendarModule
  ],
  declarations: [CalendarsPage]
})
export class CalendarsPageModule {}
