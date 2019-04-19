import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ScrollHideConfig } from 'src/app/directives/scroll-hide.directive';
import { Internship } from 'src/app/models/internship';
import { Storage } from '@ionic/storage';
import { Meeting } from 'src/app/models/meeting';
import { Student } from 'src/app/models/student';
import { Supervisor } from 'src/app/models/supervisor';
import { Teacher } from 'src/app/models/teacher';

@Component({
  selector: 'app-internship-details',
  templateUrl: './internship-details.page.html',
  styleUrls: ['./internship-details.page.scss']
})
export class InternshipDetailsPage implements OnInit {
  public internship_id;
  public internship: Internship;
  public meetings: Meeting[] = [];
  public students: Student[] = [];
  public supervisors: Supervisor[] = [];
  public professors: Teacher[] = [];

  headerScrollConfig: ScrollHideConfig = {
    cssProperty: 'margin-top',
    maxValue: 60
  };

  constructor(private route: ActivatedRoute, private storage: Storage) {}

  async gettingData() {
    // tslint:disable-next-line:radix
    this.internship_id = parseInt(this.route.snapshot.paramMap.get('id'));
    const x = this.storage.get('Internship');
    console.log(x);
    await this.storage.get('Internship').then(IS => {
      console.log(IS);
      this.formatStudents(IS);
      this.formatProfessors(IS);
      this.formatMeetings(IS);
      this.formatSupervisors(IS);
      this.internship = new Internship(
        IS.id,
        IS.internshipType,
        IS.internshipNature,
        IS.startDate,
        IS.endDate,
        IS.organisation,
        this.students,
        IS.internshipTerritory,
        IS.published,
        IS.title,
        this.professors,
        IS.schoolYear,
        this.meetings,
        IS.internshipUnit,
        this.supervisors,
        IS.status
      );
      console.log(this.internship);
    });
    console.log(this.internship);
  }

  formatMeetings(tab) {
    if (tab.meetings.length !== undefined) {
      for (let i = 0; i < tab.meetings.length; i++) {
        this.meetings.push(
          new Meeting(
            tab.meeting[i].description,
            tab.meeting[i].startTime,
            tab.meeting[i].id,
            tab.meeting[i].place,
            tab.meeting[i].endTime,
            tab.meeting[i].status
          )
        );
      }
    }
  }

  formatStudents(tab) {
    for (let i = 0; i < tab.students.length; i++) {
      this.students.push(
        new Student(tab.students[i].fullName, tab.students[i].id)
      );
    }
  }

  formatSupervisors(tab) {
    for (let i = 0; i < tab.supervisor.length; i++) {
      this.supervisors.push(
        new Supervisor(tab.supervisorss[i].fullName, tab.supervisorss[i].id)
      );
    }
  }

  formatProfessors(tab) {
    for (let i = 0; i < tab.professors.length; i++) {
      this.professors.push(
        new Teacher(
          tab.professors[i].id,
          null,
          tab.professors[i].fullName,
          null,
          null
        )
      );
    }
  }

  ngOnInit() {
    this.gettingData();
  }
}
