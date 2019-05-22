import { Component, OnInit } from '@angular/core';
import { ScrollHideConfig } from 'src/app/directives/scroll-hide.directive';
import { GetProfileService } from 'src/app/services/get-profile.service';
import { finalize } from 'rxjs/operators';
import { LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Student } from 'src/app/models/commonModels/student';
import { Class } from 'src/app/models/commonModels/class';
import { GetStudentClassService } from 'src/app/services/get-student-class.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss']
})
export class ProfilePage implements OnInit {
  public profile;
  X: any[] = [];
  Y: any[] = [];
  student: any;
  class: any;
  public createdStudent: Student;
  public createdClass: Class;
  public URL = 'http://localhost:4000/';

  headerScrollConfig: ScrollHideConfig = {
    cssProperty: 'margin-top',
    maxValue: 60
  };
  constructor(
    private profileService: GetProfileService,
    private loadingCtrl: LoadingController,
    private storage: Storage,
    private classService: GetStudentClassService
  ) {}

  // API from server (Student)
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
            // const path = this.URL + this.createdStudent.photo;
            // console.log(path);
            // document.getElementById('profilePic').setAttribute('src', path);
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
