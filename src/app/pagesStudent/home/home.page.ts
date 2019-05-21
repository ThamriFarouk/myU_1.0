import { Component, OnInit } from '@angular/core';
import { ScrollHideConfig } from 'src/app/directives/scroll-hide.directive';
import { AppComponent } from 'src/app/app.component';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { LoadingController } from '@ionic/angular';
import { GetProfileService } from 'src/app/services/get-profile.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  headerScrollConfig: ScrollHideConfig = {
    cssProperty: 'margin-top',
    maxValue: 60
  };

  constructor(
    public appComp: AppComponent,
    public router: Router,
    private storage: Storage,
    private loadingCtrl: LoadingController,
    private profileService: GetProfileService
  ) {}

  navigateToTest() {
    this.appComp.switch();
    this.router.navigate(['test']);
  }

  ngOnInit() {}
}
