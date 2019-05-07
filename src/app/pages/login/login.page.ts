import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { finalize } from 'rxjs/operators';
import { GetCredentialsService } from 'src/app/services/get-credentials.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  selectedPath = '';
  private id;

  constructor(
    private router: Router,
    public navCtrl: NavController,
    private authService: AuthentificationService,
    private credService: GetCredentialsService,
    private loadingCtrl: LoadingController
  ) {
    this.router.events.subscribe((event: RouterEvent) => {
      this.selectedPath = event.url;
    });
  }

  async login() {
    const loading = await this.loadingCtrl.create();
    await loading.present();
    const login = document.getElementById('userName');
    const pwd = document.getElementById('password');
    this.credService
      .getCredentials(login, pwd)
      .pipe(finalize(() => loading.dismiss()))
      .subscribe(response => {
        console.log(response);
      });
    this.authService.login();
    loading.dismiss();
  }

  ngOnInit() {}
}
