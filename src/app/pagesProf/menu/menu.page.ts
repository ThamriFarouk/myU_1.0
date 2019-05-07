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

  constructor(
    private router: Router,
    private authService: AuthentificationService,
    private loadingCtrl: LoadingController
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
    loading.dismiss();
  }

  ngOnInit() {}
}
