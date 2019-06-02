import { Component, OnInit, Inject } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { ScrollHideConfig } from 'src/app/directives/scroll-hide.directive';
import { finalize } from 'rxjs/operators';
import { Storage } from '@ionic/storage';
import { ClassFeed } from 'src/app/models/feedModels/classFeed';
import { ProfFeed } from 'src/app/models/feedModels/profFeed';
import { SchoolFeed } from 'src/app/models/feedModels/schoolFeed';
import { StudentFeed } from 'src/app/models/feedModels/studentFeed';
import { GetFeedsService } from 'src/app/services/get-feeds.service';

@Component({
  selector: 'app-Feeds',
  templateUrl: './feeds.page.html',
  styleUrls: ['./feeds.page.scss']
})
export class FeedsPage implements OnInit {
  headerScrollConfig: ScrollHideConfig = {
    cssProperty: 'margin-top',
    maxValue: 60
  };
  X: any[] = [];
  Y: any[] = [];
  Z: any[] = [];
  A: any[] = [];
  ResX: any[] = [];
  ResY: any[] = [];
  ResZ: any[] = [];
  ResA: any[] = [];
  classFeeds: ClassFeed[] = [];
  profFeeds: ProfFeed[] = [];
  schoolFeeds: SchoolFeed[] = [];
  studentFeeds: StudentFeed[] = [];
  allFeeds: any[] = [];
  public URL = 'http://localhost:4000/';
  public collapseCard: boolean[] = [true, true, true];
  public allClicked = true;
  public classClicked = false;
  public schoolClicked = false;
  public studentClicked = true;

  constructor(
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private FeedService: GetFeedsService,
    private storage: Storage
  ) {}

  async getClassFeeds(classId, schoolYear) {
    const loading = await this.loadingCtrl.create();
    await loading.present();
    this.FeedService.getClassFeed(classId, schoolYear)
      .pipe(finalize(() => loading.dismiss()))
      .subscribe(response => {
        this.X.push(response);
        this.ResX.push(this.X[0].classFeeds);
        this.reorginizeClassFeeds();
        console.log(this.allFeeds);
      });
  }

  async getProfFeeds(department, schoolYear) {
    const loading = await this.loadingCtrl.create();
    await loading.present();
    this.FeedService.getProfFeed(department, schoolYear)
      .pipe(finalize(() => loading.dismiss()))
      .subscribe(response => {
        this.Y.push(response);
        this.ResY.push(this.Y[0].profFeeds);
        this.reorginizeProfFeeds();
      });
  }

  async getSchoolFeeds(school, schoolYear) {
    const loading = await this.loadingCtrl.create();
    await loading.present();
    this.FeedService.getSchoolFeed(school, schoolYear)
      .pipe(finalize(() => loading.dismiss()))
      .subscribe(response => {
        this.A.push(response);
        this.ResA.push(this.A[0].schoolFeeds);
        this.reorginizeSchoolFeeds();
        console.log(this.allFeeds);
      });
  }

  async getStudentFeeds(department, schoolYear) {
    const loading = await this.loadingCtrl.create();
    await loading.present();
    this.FeedService.getStudentFeed(department, schoolYear)
      .pipe(finalize(() => loading.dismiss()))
      .subscribe(response => {
        this.Z.push(response);
        this.ResZ.push(this.Z[0].studentFeeds);
        this.reorginizeStudentFeeds();
        console.log(this.allFeeds);
      });
  }

  reorginizeClassFeeds() {
    this.ResX[0].forEach(element => {
      const CF = new ClassFeed(
        element._id,
        element.class,
        element.school,
        element.department,
        element.schoolYear,
        element.title,
        element.subtitle,
        element.categorie,
        element.content,
        element.publisher,
        element.date,
        element.time,
        element.feedImage,
        element.link
      );
      CF.checkEmptiness();
      this.classFeeds.push(CF);
    });
    this.classFeeds.reverse();
    console.log(this.classFeeds);
    this.classFeeds.forEach(elem => {
      this.allFeeds.push(elem);
    });
  }

  reorginizeStudentFeeds() {
    this.ResZ[0].forEach(element => {
      const SF = new StudentFeed(
        element._id,
        element.school,
        element.department,
        element.schoolYear,
        element.title,
        element.subtitle,
        element.categorie,
        element.content,
        element.publisher,
        element.date,
        element.time,
        element.feedImage,
        element.link
      );
      SF.checkEmptiness();
      this.studentFeeds.push(SF);
    });
    console.log(this.studentFeeds);
    this.studentFeeds.reverse();
    this.studentFeeds.forEach(elem => {
      this.allFeeds.push(elem);
    });
  }

  reorginizeSchoolFeeds() {
    this.ResA[0].forEach(element => {
      const SchoF = new SchoolFeed(
        element._id,
        element.school,
        element.schoolYear,
        element.title,
        element.subtitle,
        element.categorie,
        element.content,
        element.publisher,
        element.date,
        element.time,
        element.feedImage,
        element.link
      );
      SchoF.checkEmptiness();
      this.schoolFeeds.push(SchoF);
    });
    this.schoolFeeds.reverse();
    console.log(this.schoolFeeds);
    this.schoolFeeds.forEach(elem => {
      this.allFeeds.push(elem);
    });

    this.allFeeds.sort((a, b) => {
      const sdate1 = a.date.split('/');
      const sdate2 = b.date.split('/');
      const date1 = sdate1[1] + '/' + sdate1[0] + '/' + sdate1[2];
      const date2 = sdate2[1] + '/' + sdate2[0] + '/' + sdate2[2];
      if (Date.parse(date1) > Date.parse(date2)) {
        console.log('1');
        return 1;
      } else if (Date.parse(date1) < Date.parse(date2)) {
        console.log('-1');
        return -1;
      } else {
        console.log('0');
        return 0;
      }
    });
    console.log(this.allFeeds);
  }

  sortByDate() {
    // const classSorted = this.classFeeds.sort((a: ClassFeed, b: ClassFeed) => {
    //   const sdate1 = a.date.split('/');
    //   const sdate2 = b.date.split('/');
    //   const date1 = sdate1[1] + '/' + sdate1[0] + '/' + sdate1[2];
    //   const date2 = sdate2[1] + '/' + sdate2[0] + '/' + sdate2[2];
    //   if (Date.parse(date1) > Date.parse(date2)) {
    //     console.log('class:');
    //     console.log('1');
    //     return 1;
    //   } else if (Date.parse(date1) < Date.parse(date2)) {
    //     console.log('class:');
    //     console.log('-1');
    //     return -1;
    //   } else {
    //     console.log('class:');
    //     console.log('0');
    //     return 0;
    //   }
    // });
    // console.log('class:');
    // console.log(classSorted);
    // const schoolSorted = this.schoolFeeds.sort(
    //   (a: SchoolFeed, b: SchoolFeed) => {
    //     const sdate1 = a.date.split('/');
    //     const sdate2 = b.date.split('/');
    //     const date1 = sdate1[1] + '/' + sdate1[0] + '/' + sdate1[2];
    //     const date2 = sdate2[1] + '/' + sdate2[0] + '/' + sdate2[2];
    //     if (Date.parse(date1) > Date.parse(date2)) {
    //       console.log('school:');
    //       console.log('1');
    //       return 1;
    //     } else if (Date.parse(date1) < Date.parse(date2)) {
    //       console.log('school:');
    //       console.log('-1');
    //       return -1;
    //     } else {
    //       console.log('school:');
    //       console.log('0');
    //       return 0;
    //     }
    //   }
    // );
    // console.log('school:');
    // console.log(schoolSorted);
    // const studentSorted = this.studentFeeds.sort(
    //   (a: StudentFeed, b: StudentFeed) => {
    //     const sdate1 = a.date.split('/');
    //     const sdate2 = b.date.split('/');
    //     const date1 = sdate1[1] + '/' + sdate1[0] + '/' + sdate1[2];
    //     const date2 = sdate2[1] + '/' + sdate2[0] + '/' + sdate2[2];
    //     if (Date.parse(date1) > Date.parse(date2)) {
    //       console.log('student:');
    //       console.log('1');
    //       return 1;
    //     } else if (Date.parse(date1) < Date.parse(date2)) {
    //       console.log('student:');
    //       console.log('-1');
    //       return -1;
    //     } else {
    //       console.log('student:');
    //       console.log('0');
    //       return 0;
    //     }
    //   }
    // );
    // console.log('student:');
    // console.log(studentSorted);
  }

  reorginizeProfFeeds() {
    this.ResY[0].forEach(element => {
      const PF = new ProfFeed(
        element.id,
        element.school,
        element.department,
        element.schoolYear,
        element.title,
        element.subtitle,
        element.categorie,
        element.content,
        element.publisher,
        element.date,
        element.time,
        element.feedImage,
        element.link
      );
      PF.checkEmptiness();
      this.profFeeds.push(PF);
    });
    console.log(this.profFeeds);
  }

  getSchoolYear(): String {
    const D = new Date();
    const M = D.getMonth();
    if (M >= 1 && M <= 8) {
      return D.getFullYear() - 1 + '-' + D.getFullYear();
    } else {
      return D.getFullYear() + '-' + (D.getFullYear() + 1);
    }
  }

  collapse(i) {
    this.collapseCard[i - 1] = !this.collapseCard[i - 1];
  }

  // Manipulate the DOM to let the displaying of the class
  swichToClass() {
    if (!this.classClicked) {
      document.getElementById('segClass').setAttribute('checked', 'true'); // true
      // document.getElementById('segAll').setAttribute('checked', 'false');
      document.getElementById('segSchool').setAttribute('checked', 'false');
      document.getElementById('segStudent').setAttribute('checked', 'false');
      this.classClicked = true;
      this.studentClicked = false;
      this.schoolClicked = false;
      this.allClicked = false;
    }
  }

  // Manipulate the DOM to let the displaying of the School
  swichToSchool() {
    if (!this.schoolClicked) {
      document.getElementById('segSchool').setAttribute('checked', 'true'); // true
      // document.getElementById('segAll').setAttribute('checked', 'false');
      document.getElementById('segClass').setAttribute('checked', 'false');
      document.getElementById('segStudent').setAttribute('checked', 'false');
      this.schoolClicked = true;
      this.studentClicked = false;
      this.classClicked = false;
      this.allClicked = false;
    }
  }

  // Manipulate the DOM to let the displaying of the Student
  swichToStudent() {
    if (!this.studentClicked) {
      document.getElementById('segStudent').setAttribute('checked', 'true'); // true
      // document.getElementById('segAll').setAttribute('checked', 'false');
      document.getElementById('segClass').setAttribute('checked', 'false');
      document.getElementById('segSchool').setAttribute('checked', 'false');
      this.studentClicked = true;
      this.allClicked = false;
      this.schoolClicked = false;
      this.classClicked = false;
    }
  }

  // Manipulate the DOM to let the displaying of the All
  swichToAll() {
    if (!this.allClicked) {
      // document.getElementById('segAll').setAttribute('checked', 'true'); // true
      document.getElementById('segStudent').setAttribute('checked', 'false');
      document.getElementById('segClass').setAttribute('checked', 'false');
      document.getElementById('segSchool').setAttribute('checked', 'false');
      this.allClicked = true;
      this.schoolClicked = false;
      this.classClicked = false;
      this.studentClicked = false;
    }
  }

  ngOnInit() {
    this.storage.get('classId').then(CID => {
      const classId = CID;
      console.log(classId);
      this.storage.get('school').then(SY => {
        const school = SY;
        console.log(school);
        this.storage.get('department').then(department => {
          const dep = department;
          console.log(dep);
          this.getClassFeeds(classId, this.getSchoolYear());
          this.getStudentFeeds(dep, this.getSchoolYear());
          this.getSchoolFeeds(school, this.getSchoolYear());
          this.getProfFeeds(dep, this.getSchoolYear());
          this.sortByDate();
        });
      });
    });
    console.log(this.classFeeds);
  }
}
