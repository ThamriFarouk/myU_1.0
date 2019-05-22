import { Component, OnInit } from '@angular/core';
import { ScrollHideConfig } from 'src/app/directives/scroll-hide.directive';
import { GetProfileService } from 'src/app/services/get-profile.service';
import { finalize } from 'rxjs/operators';
import { LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss']
})
export class ProfilePage implements OnInit {
  headerScrollConfig: ScrollHideConfig = {
    cssProperty: 'margin-top',
    maxValue: 60
  };
  public prof: any;
  public X: any[] = [];
  constructor(
    private profileService: GetProfileService,
    private storage: Storage,
    private loadingCtrl: LoadingController
  ) {}

  // API from server (Prof)
  async getProfProfile(id) {
    const loading = await this.loadingCtrl.create();
    await loading.present();
    this.profileService
      .getProfProfile(id)
      .pipe(finalize(() => loading.dismiss()))
      .subscribe(response => {
        this.X.push(response);
        this.prof = this.X[0].prof;
        console.log(this.prof);
      });
  }

  ngOnInit() {
    this.storage.get('userId').then(userId => {
      const UID = userId;
      this.getProfProfile(UID);
    });
  }
}
