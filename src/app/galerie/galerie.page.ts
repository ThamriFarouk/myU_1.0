import { Component, OnInit } from '@angular/core';
import { ScrollHideConfig } from 'src/app/directives/scroll-hide.directive';
import { GetDocumentsService } from '../services/get-documents.service';
import { finalize } from 'rxjs/operators';
import { LoadingController } from '@ionic/angular';
import { GetPhotosService } from '../services/get-photos.service';

@Component({
  selector: 'app-documents',
  templateUrl: './galerie.page.html',
  styleUrls: ['./galerie.page.scss']
})
export class GaleriePage implements OnInit {
  headerScrollConfig: ScrollHideConfig = {
    cssProperty: 'margin-top',
    maxValue: 60
  };
  constructor(
    private photoService: GetPhotosService,
    private loadingCtrl: LoadingController
  ) {}

  // API from server
  async getStudentDocs() {
    const loading = await this.loadingCtrl.create();
    await loading.present();
    this.photoService
      .getPhotos()
      .pipe(finalize(() => loading.dismiss()))
      .subscribe(response => {
        console.log(response);
      });
  }

  ngOnInit() {
    this.getStudentDocs();
  }
}
