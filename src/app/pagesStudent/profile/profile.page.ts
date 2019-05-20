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
  public UT;
  X: any[] = [];
  student: any;
  prof: any;

  headerScrollConfig: ScrollHideConfig = {
    cssProperty: 'margin-top',
    maxValue: 60
  };
  constructor(
    private profileService: GetProfileService,
    private loadingCtrl: LoadingController,
    private storage: Storage
  ) {}

  // API from server (Student)
  async getStudentProfile(id) {
    const loading = await this.loadingCtrl.create();
    await loading.present();
    this.profileService
      .getStudentProfile(id)
      .pipe(finalize(() => loading.dismiss()))
      .subscribe(response => {
        this.X.push(response);
        this.student = this.X[0].student;
        console.log(this.student);
      });
  }

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
    this.storage.get('userType').then(userType => {
      this.UT = userType;
      if (this.UT === 'prof') {
        this.storage.get('profId').then(ID => {
          const id = ID;
          this.getProfProfile(id);
        });
      } else if (this.UT === 'student') {
        this.storage.get('studentId').then(ID => {
          const id = ID;
          this.getStudentProfile(id);
        });
      }
    });
  }
}
