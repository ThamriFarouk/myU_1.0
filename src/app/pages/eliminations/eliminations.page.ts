import { Component, OnInit } from '@angular/core';
import { GetStudentAttendanceService } from 'src/app/services/get-student-attendance.service';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { finalize } from 'rxjs/operators';
import { Attendance } from 'src/app/models/attendance';
import { Seance } from 'src/app/models/seance';
import { Eliminations } from 'src/app/models/eliminations';

@Component({
  selector: 'app-eliminations',
  templateUrl: './eliminations.page.html',
  styleUrls: ['./eliminations.page.scss']
})
export class EliminationsPage implements OnInit {
  public Res: any[] = [];
  public Attendance: Attendance;
  public tabSeances: any[] = [];
  public nbAbsences: any;
  public Seances;
  public tabEliminations: Eliminations[] = [];
  public numberAbsence = 1;

  public collapseCard: boolean[] = [true, true, true];
  public collapseCardCourse: boolean[] = [true, true];

  public eliminationclicked = false;

  constructor(
    private studentAttend: GetStudentAttendanceService,
    private router: Router,
    private loadingCtrl: LoadingController
  ) {}

  async getstudentAttendance() {
    const loading = await this.loadingCtrl.create();
    await loading.present();
    this.studentAttend
      .getStudentAttendance()
      .pipe(finalize(() => loading.dismiss()))
      .subscribe(response => {
        this.Res.push(response);
        this.reorginizeResponse();
        this.totalCourseAbsences(this.Attendance.seances);
        this.unicityFonction(this.tabEliminations);
        this.Seances = this.Attendance.seances;
        // console.log(this.Attendance);
        // console.log(this.tabEliminations);
      });
  }

  async getstudentAttendances(id) {
    const loading = await this.loadingCtrl.create();
    await loading.present();
    this.studentAttend
      .getStudentAttendances(id)
      .pipe(finalize(() => loading.dismiss()))
      .subscribe(response => {
        this.Res.push(response);
        this.reorginizeResponse();
        this.totalCourseAbsences(this.Attendance.seances);
        this.unicityFonction(this.tabEliminations);
        this.Seances = this.Attendance.seances;
        // console.log(this.Attendance);
        // console.log(this.tabEliminations);
      });
  }

  reorginizeResponse() {
    this.Res[0].nbAbsencesByCourse.forEach(element => {
      this.Res[0].seances.forEach(elem => {
        if (element.course === elem.course) {
          this.tabSeances.push(
            new Seance(
              elem.date,
              elem.classe,
              elem.professor,
              elem.course,
              elem.startTime,
              elem.endTime,
              element.nbAbsence
            )
          );
        }
      });
    });
    this.nbAbsences = this.Res[0].nbAbsences;
    this.Attendance = new Attendance(this.nbAbsences, this.tabSeances);
  }

  // calculate total absences for each course
  totalCourseAbsences(tab) {
    let i = 0;
    while (i < tab.length) {
      // console.log('i =' + i);
      // console.log(tab[i]);
      let j = i + 1;
      while (j < tab.length) {
        // console.log('j =' + j);
        if (tab[i].course === tab[j].course) {
          this.numberAbsence++;
          // console.log(tab); // just for tests
        }
        j++;
      }
      this.tabEliminations.push(
        new Eliminations(
          tab[i].course,
          this.numberAbsence,
          tab[i].nbAbsByCourseMax
        )
      );
      i++;
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
        if (tab[i].course === tab[j].course) {
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

  collapse(i) {
    this.collapseCard[i - 1] = !this.collapseCard[i - 1];
  }

  collapseCourse(j) {
    this.collapseCardCourse[j - 1] = !this.collapseCardCourse[j - 1];
  }

  ngOnInit() {
    this.getstudentAttendance();
    // this.getstudentAttendances(4590);
  }
}
