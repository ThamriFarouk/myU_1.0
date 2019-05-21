import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ScrollHideConfig } from 'src/app/directives/scroll-hide.directive';
import { Internship } from 'src/app/models/studentModels/internship/internship';
import { Storage } from '@ionic/storage';
import { Meeting } from 'src/app/models/studentModels/internship/meeting';
import { Student } from 'src/app/models/commonModels/student';
import { Supervisor } from 'src/app/models/studentModels/internship/supervisor';
import { Teacher } from 'src/app/models/commonModels/teacher';

@Component({
  selector: 'app-internship-details',
  templateUrl: './internship-details.page.html',
  styleUrls: ['./internship-details.page.scss']
})
export class InternshipDetailsPage implements OnInit {
  public internship_id;
  public Inter: Internship;
  public tabInternship: Internship[] = [];
  public internship: Internship;
  public meetings: Meeting[] = [];
  public students: Student[] = [];
  public supervisors: Supervisor[] = [];
  public professors: Teacher[] = [];
  public meetingsClicked = false;

  headerScrollConfig: ScrollHideConfig = {
    cssProperty: 'margin-top',
    maxValue: 40
  };

  constructor(private route: ActivatedRoute, private storage: Storage) {}

  async gettingData() {
    // tslint:disable-next-line:radix
    this.internship_id = parseInt(this.route.snapshot.paramMap.get('id'));
    const x = this.storage.get('Internship');
    this.storage.get('Internship').then(IS => {
      this.formatStudents(IS);
      this.formatProfessors(IS);
      this.formatMeetings(IS);
      this.formatSupervisors(IS);
      this.tabInternship.push(
        new Internship(
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
        )
      );
      this.tabInternship[0].checkEmptiness();
      console.log(this.tabInternship);
      console.log(this.tabInternship[0].getSupervisor().length);
    });
  }

  formatMeetings(tab) {
    if (tab.meetings.length !== undefined) {
      for (let i = 0; i < tab.meetings.length; i++) {
        this.meetings.push(
          new Meeting(
            tab.meetings[i].description,
            tab.meetings[i].startTime,
            tab.meetings[i].id,
            tab.meetings[i].place,
            tab.meetings[i].endTime,
            tab.meetings[i].status
          )
        );
      }
    }
  }

  formatStudents(tab) {
    for (let i = 0; i < tab.students.length; i++) {
      this.students.push(
        new Student(
          tab.students[i].fullName,
          tab.students[i].id,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined
        )
      );
    }
  }

  formatSupervisors(tab) {
    for (let i = 0; i < tab.supervisor.length; i++) {
      this.supervisors.push(
        new Supervisor(
          tab.supervisor[i].fullName,
          tab.supervisor[i].id,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined
        )
      );
    }
  }

  formatProfessors(tab) {
    for (let i = 0; i < tab.professors.length; i++) {
      this.professors.push(
        new Teacher(
          tab.professors[i].id,
          null,
          null,
          tab.professors[i].fullName,
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

  swichToDetails() {
    if (this.meetingsClicked) {
      document.getElementById('segDetails').setAttribute('checked', 'true');
      document.getElementById('segMeetings').setAttribute('checked', 'false');
      this.meetingsClicked = false;
    }
  }

  swichToMeetings() {
    if (!this.meetingsClicked) {
      document.getElementById('segMeetings').setAttribute('checked', 'true');
      document.getElementById('segDetails').setAttribute('checked', 'false');
      this.meetingsClicked = true;
    }
  }

  ngOnInit() {
    this.tabInternship = [];
    this.gettingData();
    this.storage.remove('Internship');
  }
}
