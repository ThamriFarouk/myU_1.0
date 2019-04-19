import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ThemeService } from 'src/app/services/theme.service';
import { ScrollHideConfig } from 'src/app/directives/scroll-hide.directive';

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
    secondary: '#7E3878',
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
  },
  greeny: {
    primary: '#1eff55cb',
    secondary: '#645A9B',
    tertiary: '#6F4BCB',
    light: '#9BEBA8',
    medium: '#4d8d58',
    dark: '#0A612E'
  },
  ruby: {
    primary: '#90C2E7',
    secondary: '#CED3DC',
    tertiary: '#4E8098',
    light: '#FCF7F8',
    medium: '#BC555D',
    dark: '#0B132B'
  }
};

@Component({
  selector: 'app-parametres',
  templateUrl: './parametres.page.html',
  styleUrls: ['./parametres.page.scss']
})
export class ParametresPage implements OnInit {
  headerScrollConfig: ScrollHideConfig = {
    cssProperty: 'margin-top',
    maxValue: 54
  };

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private theme: ThemeService
  ) {
    this.initializeApp();
  }

  changeTheme(name) {
    this.theme.setTheme(themes[name]);
  }

  changeSpeed(val) {
    this.theme.setVariable('--speed', `${val}ms`);
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {}
}
