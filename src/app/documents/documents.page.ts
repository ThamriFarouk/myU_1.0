import { Component, OnInit } from '@angular/core';
import { ScrollHideConfig } from 'src/app/directives/scroll-hide.directive';
import { GetDocumentsService } from '../services/get-documents.service';
import { finalize } from 'rxjs/operators';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.page.html',
  styleUrls: ['./documents.page.scss']
})
export class DocumentsPage implements OnInit {
  headerScrollConfig: ScrollHideConfig = {
    cssProperty: 'margin-top',
    maxValue: 60
  };
  constructor(
    private docService: GetDocumentsService,
    private loadingCtrl: LoadingController
  ) {}

  // API from server
  async getStudentDocs() {
    const loading = await this.loadingCtrl.create();
    await loading.present();
    this.docService
      .getDocuments()
      .pipe(finalize(() => loading.dismiss()))
      .subscribe(response => {
        console.log(response);
      });
  }

  ngOnInit() {
    this.getStudentDocs();
  }
}
