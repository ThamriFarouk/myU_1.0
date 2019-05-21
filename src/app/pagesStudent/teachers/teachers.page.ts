import { Component, OnInit } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { LoadingController } from '@ionic/angular';
import { TeacherListService } from 'src/app/services/teacher-list.service';
import { finalize } from 'rxjs/operators';
import { TeacherByClasse } from 'src/app/models/studentModels/teacher/teacherByClasse';
import { Teacher } from 'src/app/models/commonModels/teacher';
import { TeacherByCourse } from 'src/app/models/studentModels/teacher/teacherByCourse';
import { ScrollHideConfig } from 'src/app/directives/scroll-hide.directive';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.page.html',
  styleUrls: ['./teachers.page.scss']
})
export class TeachersPage implements OnInit {
  public Res: any[] = [];
  public TbyClasse: TeacherByClasse;
  public TbyCourse: TeacherByCourse[] = [];
  public tabTeachers: Teacher[] = [];
  public tabT: Teacher[] = [];
  public organizedByTeacher = true;

  public customAlertOptions: any = {
    header: 'Organiser par:',
    // subHeader: 'Select your toppings',
    // message: '$1.00 per topping',
    translucent: true
  };

  headerScrollConfig: ScrollHideConfig = {
    cssProperty: 'margin-top',
    maxValue: 60
  };
  X: any[] = [];

  constructor(
    public teacherService: TeacherListService,
    private loadingCtrl: LoadingController,
    private nativeHttp: HTTP,
    private storage: Storage
  ) {}

  // API from local
  async getTeacherList() {
    const loading = await this.loadingCtrl.create();
    await loading.present();
    this.teacherService
      .getTeacherList()
      .pipe(finalize(() => loading.dismiss()))
      .subscribe(response => {
        this.X.push(response);
        this.Res.push(this.X[0]);
        console.log(this.Res);
        this.Res[0][0].professors.forEach(element => {
          this.tabTeachers.push(
            new Teacher(
              element.professorId,
              element.professorClassId,
              null,
              element.professorFullName,
              element.evaluated,
              element.courseName,
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
        });
        this.TbyClasse = new TeacherByClasse(
          this.Res[0][0].classId,
          this.Res[0][0].className,
          this.tabTeachers
        );
        // console.log(this.Res);
        console.log(this.TbyClasse);
        this.reorginizeByCourse(this.TbyClasse.getProfessors());
        // console.log(this.TbyClasse);
        // console.log(this.TbyCourse);
        this.unicityFonction(this.TbyCourse);
        // console.log(this.TbyClasse);
        console.log(this.TbyCourse);
        console.log(this.tabTeachers);
      });
  }

  // API from server
  async getTeacherLists(id) {
    const loading = await this.loadingCtrl.create();
    await loading.present();
    this.teacherService
      .getTeacherLists(id)
      .pipe(finalize(() => loading.dismiss()))
      .subscribe(response => {
        this.X.push(response);
        this.Res.push(this.X[0].studentListTeachers);
        console.log(this.Res);
        this.Res[0][0].professors.forEach(element => {
          this.tabTeachers.push(
            new Teacher(
              element.professorId,
              element.professorClassId,
              null,
              element.professorFullName,
              element.evaluated,
              element.courseName,
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
        });
        this.TbyClasse = new TeacherByClasse(
          this.Res[0][0].classId,
          this.Res[0][0].className,
          this.tabTeachers
        );
        // console.log(this.Res);
        console.log(this.TbyClasse);
        this.reorginizeByCourse(this.TbyClasse.getProfessors());
        // console.log(this.TbyClasse);
        // console.log(this.TbyCourse);
        this.unicityFonction(this.TbyCourse);
        // console.log(this.TbyClasse);
        console.log(this.TbyCourse);
        console.log(this.tabTeachers);
      });
  }

  reorginizeByCourse(tab) {
    let i = 0;
    while (i < tab.length) {
      // console.log('i =' + i);
      // console.log(tab[i]);
      this.tabT.push(tab[i]);
      const courseA: string = this.splitString(tab[i].course, '(');
      let j = i + 1;
      while (j < tab.length) {
        // console.log('j =' + j);
        const courseB: string = this.splitString(tab[j].course, '(');
        if (courseA === courseB) {
          this.tabT.push(tab[j]);
        }
        j++;
      }
      this.TbyCourse.push(new TeacherByCourse(courseA, this.tabT));
      this.tabT = [];
      i++;
    }
  }

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
          // console.log(tab); //just for tests
          j--;
        }
        j++;
      }
      i++;
    }
  }

  splitString(str: string, c: string) {
    const index = str.indexOf(c);
    return str.slice(0, index - 1);
  }

  organizeByTeacher() {
    this.organizedByTeacher = !this.organizedByTeacher;
  }

  ngOnInit() {
    this.storage.get('studentId').then(res => {
      const id = res;
      this.getTeacherLists(id);
    });
  }
}
