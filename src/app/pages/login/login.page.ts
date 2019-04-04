import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  selectedPath = '';
  private id;

  constructor (
    private router: Router,
    public navCtrl: NavController,
    private authService: AuthentificationService,
    private loadingCtrl: LoadingController,
    ) {
      this.router.events.subscribe((event: RouterEvent) => {
        this.selectedPath = event.url;
      });
    }

    async login() {
      let loading = await this.loadingCtrl.create();
      await loading.present();
      this.authService.login();
      loading.dismiss();
    }

  ngOnInit() {
  }

}
