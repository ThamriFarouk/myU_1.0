import { Component } from '@angular/core';
import { Platform, LoadingController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ThemeService } from '../app/services/theme.service';
import { AuthentificationService } from './services/authentification.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

const themes = {
  autumn: {
    primary: '#F78154',
    secondary: '#4D9078',
    tertiary: '#B4436C',
    light: '#FDE8DF',
    medium: '#FCD0A2',
    dark: '#B89876'
  },
  night: {
    primary: '#8CBA80',
    secondary: '#FCFF6C',
    tertiary: '#FE5F55',
    light: '#495867',
    medium: '#BCC2C7',
    dark: '#F7F7FF'
  },
  neon: {
    primary: '#39BFBD',
    secondary: '#4CE0B3',
    tertiary: '#FF5E79',
    light: '#F4EDF2',
    medium: '#B682A5',
    dark: '#34162A'
  }
};

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: []
})
export class AppComponent {
  public userType;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private theme: ThemeService,
    private authService: AuthentificationService,
    private router: Router,
    private storage: Storage
  ) {
    this.initializeApp();
  }

  switch() {
    if (this.userType === 'student') {
      this.userType = 'student';
    } else {
      this.userType = 'etudiant';
    }
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.authService.authenticationState.subscribe(state => {
        console.log('Auth changed: ', state);
        if (this.userType === 'student') {
          this.storage.set('userType', this.userType);
          if (state) {
            this.router.navigate(['student', 'home']);
          } else {
            this.router.navigate(['login']);
          }
        } else {
          this.storage.set('userType', this.userType);
          if (state) {
            this.router.navigate(['prof', 'home']);
          } else {
            this.router.navigate(['login']);
          }
        }
      });
    });
  }
}
