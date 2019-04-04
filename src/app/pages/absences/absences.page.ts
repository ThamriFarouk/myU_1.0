import { Component, OnInit } from '@angular/core';
import { GetStudentAttendanceService } from 'src/app/services/get-student-attendance.service';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-absences',
  templateUrl: './absences.page.html',
  styleUrls: ['./absences.page.scss'],
})
export class AbsencesPage implements OnInit {

  public tabAttendance: any[] = [];
  public tabSeances: any[] = [];
  public tabAbsByCourse: any[] = [];
  public nbAbsences: any;
  public nbSeances: number;

  constructor(
    private studentAttend: GetStudentAttendanceService,
    private router: Router,
    private loadingCtrl: LoadingController,
    ) { }

    async getstudentAttendance() {
      let loading = await this.loadingCtrl.create();
      await loading.present();
      this.studentAttend.getStudentAttendance().pipe(finalize(() => loading.dismiss())).subscribe(attendance => {
        this.tabAttendance.push(attendance);
        this.tabSeances.push(attendance['seances']);
        this.tabAbsByCourse.push(attendance['nbAbsencesByCourse']);
        this.nbAbsences = attendance['nbAbsences'];
    });
  }

  async getstudentAttendances(id) {
    let loading = await this.loadingCtrl.create();
    await loading.present();
    this.studentAttend.getStudentAttendances(id).pipe(finalize(() => loading.dismiss())).subscribe(attendance => {
      this.tabAttendance.push(attendance);
      this.tabSeances.push(attendance['seances']);
      this.tabAbsByCourse.push(attendance['nbAbsencesByCourse']);
      this.nbAbsences = attendance['nbAbsences'];
    });
  }

  ngOnInit() {
    this.getstudentAttendance();
    //this.getstudentAttendances(4590);

  }

}
