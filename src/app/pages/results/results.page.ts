import { Component, OnInit } from '@angular/core';
import { GetStudentResultsService } from 'src/app/services/get-student-results.service';
import { HTTP } from '@ionic-native/http/ngx';
import { LoadingController } from '@ionic/angular';
import { finalize } from 'rxjs/operators';
import { from } from 'rxjs';


@Component({
  selector: 'app-results',
  templateUrl: './results.page.html',
  styleUrls: ['./results.page.scss'],
})
export class ResultsPage implements OnInit {

  public tabResults: any[] = [];

  constructor(
    public studentRes: GetStudentResultsService,
    private loadingCtrl: LoadingController,
    private nativeHttp: HTTP
    ) { }

  async getstudentResult() {
    let loading = await this.loadingCtrl.create();
    await loading.present();
    this.studentRes.getStudentResult().pipe(finalize(() => loading.dismiss())).subscribe(Results => {
      this.tabResults.push(Results);
      this.tabResults[0] = this.tabResults[0].reverse();
      console.log(this.tabResults);
  });
}

  async getstudentResults(id) {
    let loading = await this.loadingCtrl.create();
    await loading.present();
    this.studentRes.getStudentResults(id).pipe(finalize(() => loading.dismiss())
    ).subscribe(Results => {
      this.tabResults.push(Results);
      console.log(this.tabResults);
  });
  }

  ngOnInit() {
    this.getstudentResult();
    //this.getstudentResults(4590);
  }

}
