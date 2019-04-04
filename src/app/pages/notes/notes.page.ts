import { Component, OnInit } from '@angular/core';
import { GetStudentEvaluationService } from 'src/app/services/get-student-evaluation.service';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { finalize } from 'rxjs/operators';



@Component({
  selector: 'app-notes',
  templateUrl: './notes.page.html',
  styleUrls: ['./notes.page.scss'],
})
export class NotesPage implements OnInit {

  istoggled = false;

  public tabEvaluations: any[] = [];
  public collapseCard: boolean[] = [true, true];

  constructor(
    private studentEval: GetStudentEvaluationService,
    private router: Router,
    private loadingCtrl: LoadingController,
    ) { }

    collapse(i) {
      if (this.collapseCard[i] = true) {
        this.collapseCard[i] = false;
      } else {
        this.collapseCard[i] = true;
      }
    }

  async getstudentEvaluation() {
    let loading = await this.loadingCtrl.create();
    await loading.present();
    this.studentEval.getStudentEvaluation().pipe(finalize(() => loading.dismiss())).subscribe(Evaluation => {
      this.tabEvaluations.push(Evaluation);
      this.tabEvaluations = this.tabEvaluations.slice().reverse();
      console.log(this.tabEvaluations);
  });
}

  async getstudentEvaluations(id) {
    let loading = await this.loadingCtrl.create();
    await loading.present();
    this.studentEval.getStudentEvaluations(id).pipe(finalize(() =>  loading.dismiss())).subscribe(Evaluation => {
      this.tabEvaluations.push(Evaluation);
      this.tabEvaluations = this.tabEvaluations.slice().reverse();
      console.log(this.tabEvaluations);
  });
  }


ngOnInit() {
  this.getstudentEvaluation();
  //this.getstudentEvaluations(4590);

}

}
