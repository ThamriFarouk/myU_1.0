import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { longStackSupport } from 'q';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { LoadingController } from '@ionic/angular';
import { ScrollHideConfig } from 'src/app/directives/scroll-hide.directive';

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
      title: 'Absences',
      url: '/prof/etudiant/absences',
      icon: 'alert'
    },
    // {
    //   title: 'Eliminations',
    //   url: '/etudiant/eliminations',
    //   icon: 'close-circle'
    // },
    {
      title: 'Documents',
      url: '/prof/documents',
      icon: 'document'
    },
    {
      title: 'Galerie',
      url: '/prof/galerie',
      icon: 'images'
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
      title: 'Notes',
      url: '/prof/notes',
      icon: 'bookmarks'
    },
    {
      title: 'Résultats',
      url: '/prof/results',
      icon: 'school'
    },
    {
      title: 'Stages',
      url: '/prof/internships',
      icon: 'list-box'
    },
    {
      title: 'Enseignants',
      url: '/prof/teachers',
      icon: 'man'
    },
    {
      title: 'Parametres',
      url: '/prof/parametres',
      icon: 'construct'
    }
  ];

  public appTeacherPages = [];

  selectedPath = '';

  constructor(
    private router: Router,
    private authService: AuthentificationService,
    private loadingCtrl: LoadingController
  ) {
    this.router.events.subscribe((event: RouterEvent) => {
      this.selectedPath = event.url;
    });
  }

  async logout() {
    const loading = await this.loadingCtrl.create();
    await loading.present();
    this.authService.logout();
    loading.dismiss();
  }

  ngOnInit() {}
}
