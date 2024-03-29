import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { finalize } from 'rxjs/operators';
import { GetStudentInternshipsService } from 'src/app/services/get-student-internships.service';
import { Internship } from 'src/app/models/studentModels/internship/internship';
import { Teacher } from 'src/app/models/commonModels/teacher';
import { Meeting } from 'src/app/models/studentModels/internship/meeting';
import { Student } from 'src/app/models/commonModels/student';
import { Supervisor } from 'src/app/models/studentModels/internship/supervisor';
import { ScrollHideConfig } from 'src/app/directives/scroll-hide.directive';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-internships',
  templateUrl: './internships.page.html',
  styleUrls: ['./internships.page.scss']
})
export class InternshipsPage implements OnInit {
  url = '/student/internship-details/';
  public I: Internship = null;
  public Res: any[] = [];
  public tabInternships: Internship[] = [];
  public tabProfessors: Teacher[] = [];
  public tabMeetings: Meeting[] = [];
  public tabStudents: Student[] = [];
  public tabSupervisors: Supervisor[] = [];
  public X: any[] = [];

  headerScrollConfig: ScrollHideConfig = {
    cssProperty: 'margin-top',
    maxValue: 40
  };

  constructor(
    public studentIS: GetStudentInternshipsService,
    private storage: Storage,
    private loadingCtrl: LoadingController,
    private router: Router
  ) {}

  // API from local
  async getstudentInternship() {
    const loading = await this.loadingCtrl.create();
    await loading.present();
    this.studentIS
      .getStudentInternship()
      .pipe(finalize(() => loading.dismiss()))
      .subscribe(response => {
        this.Res.push(response);
        for (let i = 0; i < this.Res[0].length; i++) {
          this.formatMeetings(i);
          this.formatProfessors(i);
          this.formatStudents(i);
          this.formatSupervisors(i);
          this.reorginizeResponse(i);
          this.tabMeetings = [];
          this.tabProfessors = [];
          this.tabStudents = [];
          this.tabSupervisors = [];
        }
        console.log(this.tabInternships);
      });
  }

  // API from server
  async getstudentInternships(id) {
    const loading = await this.loadingCtrl.create();
    await loading.present();
    this.studentIS
      .getStudentInternships(id)
      .pipe(finalize(() => loading.dismiss()))
      .subscribe(response => {
        this.X.push(response);
        this.Res.push(this.X[0].studentInternships);
        console.log(this.Res);
        for (let i = 0; i < this.Res[0].length; i++) {
          this.formatMeetings(i);
          this.formatProfessors(i);
          this.formatStudents(i);
          this.formatSupervisors(i);
          this.reorginizeResponse(i);
          this.tabMeetings = [];
          this.tabProfessors = [];
          this.tabStudents = [];
          this.tabSupervisors = [];
        }
        // console.log(this.tabInternships);
      });
  }

  // format Professors in JSON into Object Professor
  formatProfessors(i) {
    for (let j = 0; j < this.Res[0][i].professors.length; j++) {
      this.tabProfessors.push(
        new Teacher(
          this.Res[0][i].professors[j].id,
          null,
          null,
          this.Res[0][i].professors[j].fullName,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null
        )
      );
    }
  }

  // format Students in JSON into Object Student
  formatStudents(i) {
    for (let j = 0; j < this.Res[0][i].students.length; j++) {
      this.tabStudents.push(
        new Student(
          this.Res[0][i].students[j].fullName,
          this.Res[0][i].students[j].id,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null
        )
      );
    }
  }

  // format Supervisors in JSON into Object Supervisor
  formatSupervisors(i) {
    for (let j = 0; j < this.Res[0][i].supervisors.length; j++) {
      this.tabSupervisors.push(
        new Supervisor(
          this.Res[0][i].supervisors[j].fullName,
          this.Res[0][i].supervisors[j].id,
          null,
          null,
          null,
          null,
          null,
          null,
          null
        )
      );
    }
  }

  // format Meetings in JSON into Object Meeting
  formatMeetings(i) {
    for (let j = 0; j < this.Res[0][i].meetings.length; j++) {
      this.tabMeetings.push(
        new Meeting(
          this.Res[0][i].meetings[j].description,
          this.Res[0][i].meetings[j].startTime,
          this.Res[0][i].meetings[j].id,
          this.Res[0][i].meetings[j].place,
          this.Res[0][i].meetings[j].endTime,
          this.Res[0][i].meetings[j].status
        )
      );
    }
  }

  // puts json object response into organized arrays
  reorginizeResponse(i) {
    this.tabInternships.push(
      new Internship(
        this.Res[0][i]._id,
        this.Res[0][i].internshipType,
        this.Res[0][i].internshipNature,
        this.Res[0][i].startDate,
        this.Res[0][i].endDate,
        this.Res[0][i].organisation,
        this.tabStudents,
        this.Res[0][i].internshipTerritory,
        this.Res[0][i].published,
        this.Res[0][i].title,
        this.tabProfessors,
        this.Res[0][i].schoolYear,
        this.tabMeetings,
        this.Res[0][i].internshipUnit,
        this.tabSupervisors,
        this.Res[0][i].status
      )
    );
  }

  navigateToIntershipDetailFromId(id) {
    let i = 0;
    while (i < this.tabInternships.length) {
      console.log(this.tabInternships[i]);
      if (this.tabInternships[i].getId() === id) {
        this.I = this.tabInternships[i];
        console.log(id);
      } else {
        console.log('Noooo');
      }
      i++;
    }
    this.storage.set('Internship', this.I);
    this.router.navigate([this.url + id]);
  }

  ngOnInit() {
    this.storage.get('studentId').then(res => {
      const id = res;
      this.getstudentInternships(id);
    });
  }
}
