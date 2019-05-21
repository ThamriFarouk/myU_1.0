import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { LoadingController } from '@ionic/angular';
import { ScrollHideConfig } from 'src/app/directives/scroll-hide.directive';
import { Storage } from '@ionic/storage';
import { GetStudentClassService } from 'src/app/services/get-student-class.service';
import { GetProfileService } from 'src/app/services/get-profile.service';
import { Teacher } from 'src/app/models/commonModels/teacher';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss']
})
export class MenuPage implements OnInit {
  headerScrollConfig: ScrollHideConfig = {
    cssProperty: 'margin-top',
    maxValue: undefined
  };
  footerScrollConfig: ScrollHideConfig = {
    cssProperty: 'margin-bottom',
    maxValue: undefined
  };

  public appGeneralPages = [
    {
      title: 'Documents',
      url: '/prof/documents',
      icon: 'document'
    },
    {
      title: 'Galerie',
      url: '/prof/galerie',
      icon: 'images'
    },
    {
      title: 'Parametres',
      url: '/prof/parametres',
      icon: 'construct'
    }
  ];

  public appBottomPages = [
    {
      title: 'Déconnexion',
      url: '/login',
      icon: 'log-out'
    }
  ];

  public appTeacherPages = [
    {
      title: 'Home',
      url: '/prof/home',
      icon: 'home'
    },
    {
      title: 'Actualité',
      url: '/prof/feeds',
      icon: 'paper'
    },
    {
      title: 'Calendriers',
      url: '/prof/calendars',
      icon: 'calendar'
    },
    {
      title: 'Honoraire',
      url: '/prof/fees',
      icon: 'log-out'
    },
    {
      title: 'Etudiants',
      url: '/prof/students',
      icon: 'log-out'
    },
    {
      title: 'Evaluations',
      url: '/prof/evaluations',
      icon: 'log-out'
    },
    {
      title: 'stages',
      url: '/prof/internships',
      icon: 'log-out'
    }
  ];

  selectedPath = '';
  prof: any;
  X: any[] = [];
  Y: any[] = [];
  public createdProf: Teacher;
  public URL = 'http://localhost:4000/';

  constructor(
    private router: Router,
    private authService: AuthentificationService,
    private loadingCtrl: LoadingController,
    private profileService: GetProfileService,
    private storage: Storage
  ) {
    this.router.events.subscribe((event: RouterEvent) => {
      this.selectedPath = event.url;
    });
  }

  goProfile() {
    this.router.navigate(['/prof/profile']);
  }

  async logout() {
    const loading = await this.loadingCtrl.create();
    await loading.present();
    this.authService.logout();
    this.storage.set('userType', 'null');
    loading.dismiss();
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
        this.createdProf = new Teacher(
          this.prof._id,
          null,
          null,
          this.prof.firstName + ' ' + this.prof.lastName,
          null,
          this.prof.courses,
          this.prof.birthPlace,
          this.prof.birthDate,
          this.prof.Nationality,
          this.prof.CIN,
          this.prof.PassportNumber,
          this.prof.SchoolName,
          this.prof.DepartementName,
          null
        );
        console.log(this.createdProf);
        this.storage.set('profId', this.prof._id);
        const path = this.URL + this.createdProf.photo;
        console.log(path);
        document.getElementById('profilePic').setAttribute('src', path);
      });
  }

  ngOnInit() {}
}
