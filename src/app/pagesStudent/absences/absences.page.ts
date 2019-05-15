import { Component, OnInit } from '@angular/core';
import { GetStudentAttendanceService } from 'src/app/services/get-student-attendance.service';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { finalize } from 'rxjs/operators';
import { Attendance } from 'src/app/models/studentModels/attendance/attendance';
import { Seance } from 'src/app/models/commonModels/seance';
import { Eliminations } from 'src/app/models/studentModels/attendance/eliminations';
import { ScrollHideConfig } from 'src/app/directives/scroll-hide.directive';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-absences',
  templateUrl: './absences.page.html',
  styleUrls: ['./absences.page.scss']
})
export class AbsencesPage implements OnInit {
  public Res: any[] = [];
  public Attendance: Attendance;
  public tabSeances: any[] = [];
  public nbAbsences: any;
  public Seances;
  public collapseCard: boolean[] = [true, true, true];
  public collapseCardCourse: boolean[] = [true, true];
  public eliminationclicked = false;
  public numberAbsence = 0;
  public tabEliminations: Eliminations[];
  public X: any[] = [];

  headerScrollConfig: ScrollHideConfig = {
    cssProperty: 'margin-top',
    maxValue: 60
  };

  constructor(
    private studentAttend: GetStudentAttendanceService,
    private router: Router,
    private loadingCtrl: LoadingController,
    private storage: Storage
  ) {}

  // API from local
  async getstudentAttendance() {
    const loading = await this.loadingCtrl.create();
    await loading.present();
    this.studentAttend
      .getStudentAttendance()
      .pipe(finalize(() => loading.dismiss()))
      .subscribe(response => {
        this.Res.push(response);
        this.reorginizeResponse();
        this.Seances = this.Attendance.getSeances();
      });
  }

  // API from server
  async getstudentAttendances(id) {
    const loading = await this.loadingCtrl.create();
    await loading.present();
    this.studentAttend
      .getStudentAttendances(id)
      .pipe(finalize(() => loading.dismiss()))
      .subscribe(response => {
        this.X.push(response);
        this.Res.push(this.X[0].studentAttendances[0]);
        console.log(this.Res);
        this.reorginizeResponse();
        this.Seances = this.Attendance.getSeances();
      });
  }

  // puts json object response into organized arrays
  reorginizeResponse() {
    console.log(this.Res[0]);
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

  collapse(i) {
    this.collapseCard[i - 1] = !this.collapseCard[i - 1];
  }

  collapseCourse(j) {
    this.collapseCardCourse[j - 1] = !this.collapseCardCourse[j - 1];
  }

  // Manipulate the DOM to let the displaying of the eliminations
  swichToEliminations() {
    if (!this.eliminationclicked) {
      document
        .getElementById('segEliminations')
        .setAttribute('checked', 'true');
      document.getElementById('segAbsences').setAttribute('checked', 'false');
      this.eliminationclicked = true;
    }
  }

  // Manipulate the DOM to let the displaying of the Absences
  swichToAbsences() {
    if (this.eliminationclicked) {
      document
        .getElementById('segEliminations')
        .setAttribute('checked', 'false');
      document.getElementById('segAbsences').setAttribute('checked', 'true');
      this.eliminationclicked = false;
    }
  }

  ngOnInit() {
    this.storage.get('studentId').then(res => {
      const id = res;
      this.getstudentAttendances(id);
    });
    // this.getstudentAttendance();
  }
}
