import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/services/test-service.service';
import { LoadingController } from '@ionic/angular';
import { HTTP } from '@ionic-native/http/ngx';
import { finalize } from 'rxjs/operators';
import { AppComponent } from 'src/app/app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss']
})
export class TestPage implements OnInit {
  public Products: any[] = [];
  constructor(
    public appComp: AppComponent,
    public testService: TestService,
    private loadingCtrl: LoadingController,
    private nativeHttp: HTTP,
    private router: Router
  ) {}

  async getProducts() {
    const loading = await this.loadingCtrl.create();
    await loading.present();
    this.testService
      .getProductsService()
      .pipe(finalize(() => loading.dismiss()))
      .subscribe(response => {
        this.Products.push(response);
        console.log(this.Products);
      });
    console.log(this.Products);
  }

  navigateToStudent() {
    this.appComp.switch();
    this.router.navigate(['etudiant', 'home']);
  }

  ngOnInit() {
    this.getProducts();
    console.log(this.Products);
  }
}
