import { Component, OnInit } from '@angular/core';
import { GetStudentResultsService } from 'src/app/services/get-student-results.service';
import { HTTP } from '@ionic-native/http/ngx';
import { LoadingController } from '@ionic/angular';
import { finalize } from 'rxjs/operators';
import { StudentResults } from 'src/app/models/studentResults';
import { ScrollHideConfig } from 'src/app/directives/scroll-hide.directive';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-results',
  templateUrl: './results.page.html',
  styleUrls: ['./results.page.scss']
})
export class ResultsPage implements OnInit {
  public Res: any[] = [];
  public tabResults: StudentResults[] = [];
  public collapseCard: boolean[] = [true, true];
  public X: any[] = [];

  headerScrollConfig: ScrollHideConfig = {
    cssProperty: 'margin-top',
    maxValue: 60
  };

  constructor(
    public studentRes: GetStudentResultsService,
    private loadingCtrl: LoadingController,
    private nativeHttp: HTTP,
    private storage: Storage
  ) {}

  // API from local
  async getstudentResult() {
    const loading = await this.loadingCtrl.create();
    await loading.present();
    this.studentRes
      .getStudentResult()
      .pipe(finalize(() => loading.dismiss()))
      .subscribe(response => {
        this.Res.push(response);
        this.reorginizeResponse();
        for (let i = 0; i < this.tabResults.length; i++) {
          this.tabResults[i].test();
          // console.log(this.tabResults[i].mention);
        }
        this.tabResults = this.tabResults.reverse();
        // console.log(this.tabResults);
      });
  }

  // API from server
  async getstudentResults(id) {
    const loading = await this.loadingCtrl.create();
    await loading.present();
    this.studentRes
      .getStudentResults(id)
      .pipe(finalize(() => loading.dismiss()))
      .subscribe(response => {
        this.X.push(response);
        this.Res.push(this.X[0].studentResults);
        this.reorginizeResponse();
        for (let i = 0; i < this.tabResults.length; i++) {
          this.tabResults[i].test();
          // console.log(this.tabResults[i].mention);
        }
        this.tabResults = this.tabResults.reverse();
        // console.log(this.tabResults);
      });
  }

  // puts json object response into organized arrays
  reorginizeResponse() {
    this.Res[0].forEach(element => {
      this.tabResults.push(
        new StudentResults(
          element.average,
          element.classe,
          element.decision,
          element.avgBeforeInternship,
          element.session,
          element.schoolYear,
          element.type,
          element.mention
        )
      );
    });
  }

  // collapsable cards
  collapse(i) {
    this.collapseCard[i - 1] = !this.collapseCard[i - 1];
  }

  ngOnInit() {
    // this.getstudentResult();
    this.storage.get('studentId').then(res => {
      const id = res;
      this.getstudentResults(id);
    });
  }
}
