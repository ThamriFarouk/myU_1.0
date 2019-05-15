import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { finalize } from 'rxjs/operators';
import { GetCredentialsService } from 'src/app/services/get-credentials.service';
import { AppComponent } from 'src/app/app.component';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  selectedPath = '';
  private userConnected;
  private a;

  constructor(
    private router: Router,
    public navCtrl: NavController,
    private authService: AuthentificationService,
    private credService: GetCredentialsService,
    private loadingCtrl: LoadingController,
    private storage: Storage,
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
    this.credService
      .getCredentials(login, pwd)
      .pipe(finalize(() => loading.dismiss()))
      .subscribe(user => {
        this.userConnected = user;
        console.log(this.userConnected);
        this.appComp.userType = this.userConnected.type;
        this.storage.set('userType', this.userConnected.type);
        this.storage.set('userId', this.userConnected.user_id);
        console.log(this.userConnected.type);
        this.authService.login();
      });
    loading.dismiss();
    this.storage.get('userType').then(UT => {
      this.a = UT;
      console.log(this.a);
    });
  }

  ngOnInit() {}
}
