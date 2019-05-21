import { Component, OnInit } from '@angular/core';
import { ScrollHideConfig } from 'src/app/directives/scroll-hide.directive';
import { GetDocumentsService } from '../services/get-documents.service';
import { finalize } from 'rxjs/operators';
import { LoadingController } from '@ionic/angular';
import { Document } from '../models/commonModels/document';

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
  public tabDocs: Document[] = [];
  public X: any[] = [];
  public tab: any[] = [];
  public URL = 'http://localhost:4000/';

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
        this.X.push(response);
        this.tab.push(this.X[0].studentDocuments);
        console.log(this.tab);
        this.reorginizeResponse();
        const path = this.URL + this.createdStudent.photo;
        console.log(path);
        document.getElementById('profilePic').setAttribute('src', path);
      });
  }

  reorginizeResponse() {
    this.tab[0].forEach(element => {
      this.tabDocs.push(
        new Document(
          element.title,
          element.subtitle,
          element.categorie,
          element.content,
          element.publisher,
          element.date,
          element.time,
          element.documentImage
        )
      );
    });
    console.log(this.tabDocs);
  }

  ngOnInit() {
    this.getStudentDocs();
  }
}
