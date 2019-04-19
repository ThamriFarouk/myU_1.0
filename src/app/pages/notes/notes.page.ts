import { Component, OnInit } from '@angular/core';
import { GetStudentEvaluationService } from 'src/app/services/get-student-evaluation.service';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { finalize } from 'rxjs/operators';
import { Unit } from 'src/app/models/Unit';
import { Course } from 'src/app/models/Course';
import { Evaluation } from 'src/app/models/evaluation';
import { ScrollHideConfig } from 'src/app/directives/scroll-hide.directive';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.page.html',
  styleUrls: ['./notes.page.scss']
})
export class NotesPage implements OnInit {
  istoggled = false;

  public Res: any[] = [];
  public tabUnits: Unit[] = [];
  public tabCourses: Course[] = [];
  public tabEvals: Evaluation[] = [];

  public collapseCard: boolean[] = [true, true, true];
  public collapseCardCourse: boolean[] = [true, true];

  headerScrollConfig: ScrollHideConfig = {
    cssProperty: 'margin-top',
    maxValue: 60
  };

  constructor(
    private studentEval: GetStudentEvaluationService,
    private router: Router,
    private loadingCtrl: LoadingController
  ) {}

  // API from local
  async getstudentEvaluation() {
    const loading = await this.loadingCtrl.create();
    await loading.present();
    this.studentEval
      .getStudentEvaluation()
      .pipe(finalize(() => loading.dismiss()))
      .subscribe(response => {
        this.Res.push(response);
        this.reorginizeResponse();
        this.putEvalsInCourse();
        this.putCoursesInUnit();
        this.unicityFonction(this.tabUnits);

        for (let i = 0; i < this.tabUnits.length; i++) {
          this.unicityFonction(this.tabUnits[i].getCourses());
          for (let j = 0; j < this.tabUnits[i].getCourses().length; j++) {
            this.unicityFonction(
              this.tabUnits[i].getCourses()[j].getEvaluations()
            );
          }
        }
      });
  }

  // API from server
  async getstudentEvaluations(id) {
    const loading = await this.loadingCtrl.create();
    await loading.present();
    this.studentEval
      .getStudentEvaluations(id)
      .pipe(finalize(() => loading.dismiss()))
      .subscribe(response => {
        this.Res.push(response);
        this.reorginizeResponse();
        this.putEvalsInCourse();
        this.putCoursesInUnit();
        this.unicityFonction(this.tabUnits);

        for (let i = 0; i < this.tabUnits.length; i++) {
          this.unicityFonction(this.tabUnits[i].getCourses());
          for (let j = 0; j < this.tabUnits[i].getCourses().length; j++) {
            this.unicityFonction(
              this.tabUnits[i].getCourses()[j].getEvaluations()
            );
          }
        }
      });
  }

  // puts json object response into organized arrays
  reorginizeResponse() {
    this.Res[0].forEach(element => {
      this.tabUnits.push(new Unit(element.unit, element.unitCoef, []));
      this.tabCourses.push(
        new Course(element.course, element.courseCoef, element.unit, [])
      );
      this.tabEvals.push(
        new Evaluation(element.evalName, element.course, element.note)
      );
    });
  }

  // puts in the array tabCourse all the course belonging to the same Course
  putEvalsInCourse() {
    for (let i = 0; i < this.tabEvals.length; i++) {
      for (let j = 0; j < this.tabCourses.length; j++) {
        if (this.tabEvals[i].getCourseName() === this.tabCourses[j].getName()) {
          this.tabCourses[j].getEvaluations().push(this.tabEvals[i]);
        }
      }
    }
  }

  // puts in the array tabUnits all the course belonging to the same unit
  putCoursesInUnit() {
    for (let i = 0; i < this.tabCourses.length; i++) {
      for (let j = 0; j < this.tabUnits.length; j++) {
        if (this.tabCourses[i].getUnitName() === this.tabUnits[j].getName()) {
          this.tabUnits[j].getCourses().push(this.tabCourses[i]);
        }
      }
    }
  }

  // deletes duplicated element in an array of units
  unicityFonction(tab) {
    let i = 0;
    while (i < tab.length) {
      // console.log('i =' + i);
      // console.log(tab[i]);
      let j = i + 1;
      while (j < tab.length) {
        // console.log('j =' + j);
        if (tab[i].name === tab[j].name) {
          // console.log(tab[j]);
          tab.splice(j, 1);
          // console.log('spliced' + '[' + i + ',' + j + ']');
          // console.log(tab); // just for tests
          j--;
        }
        j++;
      }
      i++;
    }
  }

  // deletes duplicated element in an array of courses
  unicityFonctionCourses(tab, attribute1, attribute2) {
    let i = 0;
    while (i < tab.length) {
      // console.log('i =' + i);
      // console.log(tab[i]);
      let j = i + 1;
      while (j < tab.length) {
        // console.log('j =' + j);
        // tslint:disable-next-line:no-eval
        if (eval(tab[i].attribute1) === eval(tab[j].attribute2)) {
          // console.log(tab[j]);
          tab.splice(j, 1);
          // console.log('spliced' + '[' + i + ',' + j + ']');
          // console.log(tab); // just for tests
          j--;
        }
        j++;
      }
      i++;
    }
  }

  collapseUnit(i) {
    this.collapseCard[i - 1] = !this.collapseCard[i - 1];
  }

  collapseCourse(j) {
    this.collapseCardCourse[j - 1] = !this.collapseCardCourse[j - 1];
  }

  ngOnInit() {
    this.getstudentEvaluation();
    // this.getstudentEvaluations(4590);
  }
}
