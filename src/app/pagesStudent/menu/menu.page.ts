import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { LoadingController } from '@ionic/angular';
import { ScrollHideConfig } from 'src/app/directives/scroll-hide.directive';
import { GetProfileService } from 'src/app/services/get-profile.service';
import { Storage } from '@ionic/storage';

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
      url: '/student/documents',
      icon: 'document'
    },
    {
      title: 'Galerie',
      url: '/student/galerie',
      icon: 'images'
    },
    {
      title: 'Parametres',
      url: '/student/parametres',
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

  public appStudentPages = [
    {
      title: 'Home',
      url: '/student/home',
      icon: 'home'
    },
    {
      title: 'Actualité',
      url: '/student/feeds',
      icon: 'paper'
    },
    {
      title: 'Calendriers',
      url: '/student/calendars',
      icon: 'calendar'
    },
    {
      title: 'Absences',
      url: '/student/absences',
      icon: 'alert'
    },
    {
      title: 'Notes',
      url: '/student/notes',
      icon: 'bookmarks'
    },
    {
      title: 'Résultats',
      url: '/student/results',
      icon: 'school'
    },
    {
      title: 'Stages',
      url: '/student/internships',
      icon: 'list-box'
    },
    {
      title: 'Enseignants',
      url: '/student/teachers',
      icon: 'man'
    }
  ];

  public appTeacherPages = [];

  selectedPath = '';
  public profile;

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
    this.router.navigate(['/student/profile']);
  }

  async logout() {
    const loading = await this.loadingCtrl.create();
    await loading.present();
    this.authService.logout();
    this.storage.set('userType', 'null');
    loading.dismiss();
  }

  getProfile() {
    this.storage.get('userId').then(res => {
      const UID = res;
      console.log(UID);
      this.storage.get('userType').then(userType => {
        const UT = userType;
        console.log(UT);
        if (UT === 'student') {
          this.profileService.getStudentProfile(UID).subscribe(result => {
            this.profile = result;
            this.profile = this.profile.student;
            console.log(this.profile);
            this.storage.set('studentId', this.profile._id);
          });
        }
        if (UT === 'prof') {
          this.profileService.getStudentProfile(UID).subscribe(result => {
            this.profile = result;
            this.profile = this.profile.student;
            this.storage.set('profId', this.profile._id);
          });
        }
      });
    });
  }

  ngOnInit() {
    // this.getProfile();
  }
}
