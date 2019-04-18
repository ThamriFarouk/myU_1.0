import { Component, OnInit } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { LoadingController } from '@ionic/angular';
import { finalize } from 'rxjs/operators';
import { from } from 'rxjs';
import { GetStudentInternshipsService } from 'src/app/services/get-student-internships.service';

@Component({
  selector: 'app-internships',
  templateUrl: './internships.page.html',
  styleUrls: ['./internships.page.scss']
})
export class InternshipsPage implements OnInit {
  public tabInternship: any[] = [];

  constructor(
    public studentIS: GetStudentInternshipsService,
    private loadingCtrl: LoadingController,
    private nativeHttp: HTTP
  ) {}

  async getstudentInternship() {
    const loading = await this.loadingCtrl.create();
    await loading.present();
    this.studentIS
      .getStudentInternship()
      .pipe(finalize(() => loading.dismiss()))
      .subscribe(res => {
        this.tabInternship.push(res);
        this.tabInternship[0] = this.tabInternship[0].reverse();
        console.log(this.tabInternship);
      });
  }

  async getstudentInternships(id, internshipID) {
    const loading = await this.loadingCtrl.create();
    await loading.present();
    this.studentIS
      .getStudentInternships(id, internshipID)
      .pipe(finalize(() => loading.dismiss()))
      .subscribe(res => {
        this.tabInternship.push(res);
        // console.log(this.tabInternship);
      });
  }

  ngOnInit() {
    this.getstudentInternship();
    // this.getstudentInternships(4590,1);
  }
}
