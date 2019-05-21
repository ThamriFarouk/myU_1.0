import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { LoadingController } from '@ionic/angular';
import { ScrollHideConfig } from 'src/app/directives/scroll-hide.directive';
import { GetProfileService } from 'src/app/services/get-profile.service';
import { Storage } from '@ionic/storage';
import { finalize } from 'rxjs/operators';
import { GetStudentClassService } from 'src/app/services/get-student-class.service';
import { Student } from 'src/app/models/commonModels/student';
import { ClassField } from '@angular/compiler';
import { Class } from 'src/app/models/commonModels/class';
import { Teacher } from 'src/app/models/commonModels/teacher';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss']
})
export class MenuPage implements OnInit {
  headerScrollConfig: ScrollHideConfig = {
    cssProperty: 'margin-top',
    maxValue: undefined
  };
  footerScrollConfig: ScrollHideConfig = {
    cssProperty: 'margin-bottom',
    maxValue: undefined
  };

  public appGeneralPages = [
    {
      title: 'Documents',
      url: '/student/documents',
      icon: 'document'
    },
    {
      title: 'Galerie',
      url: '/student/galerie',
      icon: 'images'
    },
    {
      title: 'Parametres',
      url: '/student/parametres',
      icon: 'construct'
    }
  ];

  public appBottomPages = [
    {
      title: 'Déconnexion',
      url: '/login',
      icon: 'log-out'
    }
  ];

  public appStudentPages = [
    {
      title: 'Home',
      url: '/student/home',
      icon: 'home'
    },
    {
      title: 'Actualité',
      url: '/student/feeds',
      icon: 'paper'
    },
    {
      title: 'Calendriers',
      url: '/student/calendars',
      icon: 'calendar'
    },
    {
      title: 'Absences',
      url: '/student/absences',
      icon: 'alert'
    },
    {
      title: 'Notes',
      url: '/student/notes',
      icon: 'bookmarks'
    },
    {
      title: 'Résultats',
      url: '/student/results',
      icon: 'school'
    },
    {
      title: 'Stages',
      url: '/student/internships',
      icon: 'list-box'
    },
    {
      title: 'Enseignants',
      url: '/student/teachers',
      icon: 'man'
    }
  ];

  selectedPath = '';
  public profile;
  X: any[] = [];
  Y: any[] = [];
  student: any;
  class: any;
  public createdStudent: Student;
  public createdClass: Class;
  public URL = 'http://localhost:4000/';

  constructor(
    private router: Router,
    private authService: AuthentificationService,
    private loadingCtrl: LoadingController,
    private profileService: GetProfileService,
    private storage: Storage,
    private classService: GetStudentClassService
  ) {
    this.router.events.subscribe((event: RouterEvent) => {
      this.selectedPath = event.url;
    });
  }

  goProfile() {
    this.router.navigate(['/student/profile']);
  }

  async logout() {
    const loading = await this.loadingCtrl.create();
    await loading.present();
    this.authService.logout();
    this.storage.set('userType', 'null');
    loading.dismiss();
  }

  async getStudent(id) {
    const loading = await this.loadingCtrl.create();
    await loading.present();
    this.profileService
      .getStudentProfile(id)
      .pipe(finalize(() => loading.dismiss()))
      .subscribe(response => {
        this.X.push(response);
        this.student = this.X[0].student;
        this.classService
          .getStudentClass(this.student.class)
          .pipe(finalize(() => loading.dismiss()))
          .subscribe(resp => {
            this.Y.push(resp);
            this.class = this.Y[0].classe;
            this.createdClass = new Class(
              this.class._id,
              this.class.name,
              this.class.departementName
            );
            this.createdStudent = new Student(
              this.student.firstName + ' ' + this.student.lastName,
              this.student._id,
              this.student.class,
              this.student.email,
              this.student.birthPlace,
              this.student.birthDate,
              this.student.Nationality,
              this.student.CIN,
              this.student.PassportNumber,
              this.student.SchoolName,
              this.student.DepartmentName,
              this.student.photo
            );
            console.log(this.createdStudent);
            console.log(this.createdClass);
            this.storage.set('studentId', this.student._id);
            const path = this.URL + this.createdStudent.photo;
            console.log(path);
            document.getElementById('profilePic').setAttribute('src', path);
          });
      });
  }

  ngOnInit() {
    this.storage.get('userType').then(userType => {
      this.storage.get('userId').then(ID => {
        const id = ID;
        this.getStudent(id);
      });
    });
  }
}
