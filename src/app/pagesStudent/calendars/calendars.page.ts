import { CalendarComponent } from 'ionic2-calendar/calendar';
import { Component, ViewChild, OnInit, Inject, LOCALE_ID } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { formatDate } from '@angular/common';
import { ScrollHideConfig } from 'src/app/directives/scroll-hide.directive';
import { finalize } from 'rxjs/operators';
import { GetCalendarService } from 'src/app/services/get-calendar.service';
import { Storage } from '@ionic/storage';
import { ClassCalendar } from 'src/app/models/calendarModels/classCalendar';
import { ExamCalendar } from 'src/app/models/calendarModels/examCalendar';
import { SchoolCalendar } from 'src/app/models/calendarModels/schoolCalendar';
import { ProfCalendar } from 'src/app/models/calendarModels/profCalendar';
import { ProfExamCalendar } from 'src/app/models/calendarModels/profExamCalendar';

@Component({
  selector: 'app-calendars',
  templateUrl: './calendars.page.html',
  styleUrls: ['./calendars.page.scss']
})
export class CalendarsPage implements OnInit {
  headerScrollConfig: ScrollHideConfig = {
    cssProperty: 'margin-top',
    maxValue: 60
  };
  event = {
    title: '',
    desc: '',
    startTime: '',
    endTime: '',
    allDay: false
  };

  minDate = new Date().toISOString();

  eventSource = [];
  viewTitle;

  calendar = {
    mode: 'month',
    currentDate: new Date()
  };

  @ViewChild(CalendarComponent) myCal: CalendarComponent;
  X: any[] = [];
  Y: any[] = [];
  Z: any[] = [];
  A: any[] = [];
  ResX: any[] = [];
  ResY: any[] = [];
  ResZ: any[] = [];
  ResA: any[] = [];
  classCalendar: ClassCalendar[] = [];
  examCalendar: ExamCalendar[] = [];
  schoolCalendar: SchoolCalendar[] = [];
  profCalendar: ProfCalendar[] = [];
  profExamCalendar: ProfExamCalendar[] = [];

  constructor(
    private alertCtrl: AlertController,
    @Inject(LOCALE_ID) private locale: string,
    private loadingCtrl: LoadingController,
    private CalendarService: GetCalendarService,
    private storage: Storage
  ) {}

  resetEvent() {
    this.event = {
      title: '',
      desc: '',
      startTime: new Date().toISOString(),
      endTime: new Date().toISOString(),
      allDay: false
    };
  }

  // Create the right event format and reload source
  addEvent() {
    const eventCopy = {
      title: this.event.title,
      startTime: new Date(this.event.startTime),
      endTime: new Date(this.event.endTime),
      allDay: this.event.allDay,
      desc: this.event.desc
    };

    if (eventCopy.allDay) {
      const start = eventCopy.startTime;
      const end = eventCopy.endTime;

      eventCopy.startTime = new Date(
        Date.UTC(
          start.getUTCFullYear(),
          start.getUTCMonth(),
          start.getUTCDate()
        )
      );
      eventCopy.endTime = new Date(
        Date.UTC(end.getUTCFullYear(), end.getUTCMonth(), end.getUTCDate() + 1)
      );
    }

    this.eventSource.push(eventCopy);
    this.myCal.loadEvents();
    this.resetEvent();
  }

  async getClassCalendar(classId, schoolYear) {
    const loading = await this.loadingCtrl.create();
    await loading.present();
    this.CalendarService.getClassCalendar(classId, schoolYear)
      .pipe(finalize(() => loading.dismiss()))
      .subscribe(response => {
        this.X.push(response);
        this.ResX.push(this.X[0].ClassCalendar);
        this.reorginizeClassCalendar();
      });
  }

  async getExamCalendar(classId, schoolYear) {
    const loading = await this.loadingCtrl.create();
    await loading.present();
    this.CalendarService.getExamCalendar(classId, schoolYear)
      .pipe(finalize(() => loading.dismiss()))
      .subscribe(response => {
        this.Y.push(response);
        this.ResY.push(this.Y[0].ExamCalendar);
        this.reorginizeExamCalendar();
      });
  }

  async getProfExamCalendar(profId, schoolYear) {
    const loading = await this.loadingCtrl.create();
    await loading.present();
    this.CalendarService.getProfExamCalendar(profId, schoolYear)
      .pipe(finalize(() => loading.dismiss()))
      .subscribe(response => {
        this.A.push(response);
        this.ResA.push(this.A[0].ProfExamCalendar);
        this.reorginizeProfExamCalendar();
      });
  }

  async getSchoolCalendar(school, schoolYear) {
    const loading = await this.loadingCtrl.create();
    await loading.present();
    this.CalendarService.getSchoolCalendar(school, schoolYear)
      .pipe(finalize(() => loading.dismiss()))
      .subscribe(response => {
        this.Z.push(response);
        this.ResZ.push(this.Z[0].SchoolCalendar);
        this.reorginizeSchoolCalendar();
      });
  }

  reorginizeClassCalendar() {
    this.ResX[0].forEach(element => {
      this.classCalendar.push(
        new ClassCalendar(
          element.id,
          element.class,
          element.name,
          element.schoolYear,
          element.seances
        )
      );
    });
    console.log(this.classCalendar);
  }

  reorginizeExamCalendar() {
    this.ResX[0].forEach(element => {
      this.examCalendar.push(
        new ExamCalendar(
          element.id,
          element.class,
          element.name,
          element.schoolYear,
          element.exams
        )
      );
    });
    console.log(this.examCalendar);
  }

  reorginizeSchoolCalendar() {
    this.ResX[0].forEach(element => {
      this.schoolCalendar.push(
        new SchoolCalendar(
          element.id,
          element.school,
          element.name,
          element.schoolYear,
          element.seances
        )
      );
    });
    console.log(this.schoolCalendar);
  }

  reorginizeProfExamCalendar() {
    this.ResX[0].forEach(element => {
      this.profExamCalendar.push(
        new ProfExamCalendar(
          element.id,
          element.prof,
          element.name,
          element.schoolYear,
          element.exams
        )
      );
    });
    console.log(this.profExamCalendar);
  }

  reorginizeProfCalendar() {
    this.ResX[0].forEach(element => {
      this.profCalendar.push(
        new ProfCalendar(
          element.id,
          element.prof,
          element.name,
          element.schoolYear,
          element.seances
        )
      );
    });
    console.log(this.profCalendar);
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

  // Change current month/week/day
  next() {
    const swiper = document.querySelector('.swiper-container')['swiper'];
    swiper.slideNext();
  }

  back() {
    const swiper = document.querySelector('.swiper-container')['swiper'];
    swiper.slidePrev();
  }

  // Change between month/week/day
  changeMode(mode) {
    this.calendar.mode = mode;
  }

  // Focus today
  today() {
    this.calendar.currentDate = new Date();
  }

  // Selected date reange and hence title changed
  onViewTitleChanged(title) {
    this.viewTitle = title;
  }

  // Calendar event was clicked
  async onEventSelected(event) {
    // Use Angular date pipe for conversion
    const start = formatDate(event.startTime, 'medium', this.locale);
    const end = formatDate(event.endTime, 'medium', this.locale);

    const alert = await this.alertCtrl.create({
      header: event.title,
      subHeader: event.desc,
      message: 'From: ' + start + '<br><br>To: ' + end,
      buttons: ['OK']
    });
    alert.present();
  }

  // Time slot was clicked
  onTimeSelected(ev) {
    const selected = new Date(ev.selectedTime);
    this.event.startTime = selected.toISOString();
    selected.setHours(selected.getHours() + 1);
    this.event.endTime = selected.toISOString();
  }

  ngOnInit() {
    this.resetEvent();
    this.storage.get('classId').then(CID => {
      const classId = CID;
      console.log(classId);
      this.storage.get('school').then(SY => {
        const school = SY;
        console.log(school);
        this.getClassCalendar(classId, this.getSchoolYear());
        this.getExamCalendar(classId, this.getSchoolYear());
        this.getSchoolCalendar(school, this.getSchoolYear());
      });
    });
  }
}
