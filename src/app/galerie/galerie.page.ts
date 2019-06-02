import { Component, OnInit } from '@angular/core';
import { ScrollHideConfig } from 'src/app/directives/scroll-hide.directive';
import { GetDocumentsService } from '../services/get-documents.service';
import { finalize } from 'rxjs/operators';
import {
  LoadingController,
  NavController,
  ModalController
} from '@ionic/angular';
import { GetPhotosService } from '../services/get-photos.service';
import { Photo } from '../models/commonModels/photo';

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
  public tabPhotos: Photo[] = [];
  public X: any[] = [];
  public tab: any[] = [];
  public URL = 'http://localhost:4000/';
  public collapseCard: boolean[] = [
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true
  ];

  // galleryType = 'regular';
  // sliderOpts = {
  //   zoom: false,
  //   slidesPerView: 1.5,
  //   spaceBetween: 20,
  //   centeredSlides: true
  // };

  constructor(
    private photoService: GetPhotosService,
    private loadingCtrl: LoadingController,
    public navCtrl: NavController,
    private modalController: ModalController
  ) {}

  // API from server
  async getPhotos() {
    const loading = await this.loadingCtrl.create();
    await loading.present();
    this.photoService
      .getPhotos()
      .pipe(finalize(() => loading.dismiss()))
      .subscribe(response => {
        console.log(response);
        this.X.push(response);
        this.tab.push(this.X[0].schoolPhotos);
        console.log(this.tab);
        this.reorginizeResponse();
      });
  }

  reorginizeResponse() {
    this.tab[0].forEach(element => {
      const photo = new Photo(
        element.path,
        element.caption,
        element.description,
        element.date,
        element.time
      );
      photo.checkEmptiness();
      this.tabPhotos.push(photo);
    });
    console.log(this.tabPhotos);
  }
  // openPreview(img) {
  //   this.modalController
  //     .create({
  //       component: GaleriePage,
  //       componentProps: {
  //         img: img
  //       }
  //     })
  //     .then(modal => {
  //       modal.present();
  //     });
  // }

  collapse(i) {
    this.collapseCard[i - 1] = !this.collapseCard[i - 1];
  }

  ngOnInit() {
    this.getPhotos();
  }
}
