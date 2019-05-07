import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { finalize } from 'rxjs/operators';
import { GetCredentialsService } from 'src/app/services/get-credentials.service';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  selectedPath = '';
  private userConnected;

  constructor(
    private router: Router,
    public navCtrl: NavController,
    private authService: AuthentificationService,
    private credService: GetCredentialsService,
    private loadingCtrl: LoadingController,
    private appComp: AppComponent
  ) {
    this.router.events.subscribe((event: RouterEvent) => {
      this.selectedPath = event.url;
    });
  }

  async login() {
    const loading = await this.loadingCtrl.create();
    await loading.present();
    const log = <HTMLInputElement>document.getElementById('userName');
    const login = log.value;
    const pass = <HTMLInputElement>document.getElementById('password');
    const pwd = pass.value;
    console.log(login);
    console.log(pwd);
    this.credService
      .getCredentials(login, pwd)
      .pipe(finalize(() => loading.dismiss()))
      .subscribe(user => {
        console.log(user);
        this.userConnected = user;
        console.log(this.userConnected);
        this.appComp.user = this.userConnected.type;
        this.authService.login();
      });
    loading.dismiss();
  }

  ngOnInit() {}
}
