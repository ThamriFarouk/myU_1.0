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
  X: any[] = [];
  student: any;
  prof: any;
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

  async getStudent(id) {
    const loading = await this.loadingCtrl.create();
    await loading.present();
    this.profileService
      .getStudentProfile(id)
      .pipe(finalize(() => loading.dismiss()))
      .subscribe(response => {
        this.X.push(response);
        this.student = this.X[0].student;
        console.log(this.student);
        this.storage.set('studentId', this.student._id);
      });
  }

  async getProf(id) {
    const loading = await this.loadingCtrl.create();
    await loading.present();
    this.profileService
      .getProfProfile(id)
      .pipe(finalize(() => loading.dismiss()))
      .subscribe(response => {
        this.X.push(response);
        this.prof = this.X[0].prof;
        console.log(this.prof);
        this.storage.set('profId', this.prof._id);
      });
  }

  ngOnInit() {
    this.storage.get('userType').then(userType => {
      const UT = userType;
      if (UT === 'prof') {
        this.storage.get('userId').then(ID => {
          const id = ID;
          this.getProf(id);
        });
      } else if (UT === 'student') {
        this.storage.get('userId').then(ID => {
          const id = ID;
          this.getStudent(id);
        });
      }
    });
  }
}
