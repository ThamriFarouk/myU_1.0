import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ScrollHideDirective } from 'src/app/directives/scroll-hide.directive';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule],
  declarations: [ScrollHideDirective],
  exports: [ScrollHideDirective]
})
export class ScrollHideModule {}
