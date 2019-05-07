import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { NotesPage } from './notes.page';
import { ScrollHideDirective } from 'src/app/directives/scroll-hide.directive';
import { ScrollHideModule } from 'src/app/directives/scroll-hide.module';

const routes: Routes = [
  {
    path: '',
    component: NotesPage
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
  declarations: [NotesPage]
})
export class NotesPageModule {}
