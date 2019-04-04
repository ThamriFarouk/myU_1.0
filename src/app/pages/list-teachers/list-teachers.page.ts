import { Component, OnInit } from '@angular/core';
import { Teacher } from 'src/app/models/teacher';
import { Router, RouterEvent } from '@angular/router';
import { NavController } from '@ionic/angular';
import { TeacherDataService } from 'src/app/services/teacher-data.service';

@Component({
  selector: 'app-list-teachers',
  templateUrl: './list-teachers.page.html',
  styleUrls: ['./list-teachers.page.scss'],
})
export class ListTeachersPage implements OnInit {

  Teachers$ = this.service.getTeacher();

  public tabTeachers: any[] = [];

  selectedPath = '';

  public teacher_details_url = '/etudiant/teacherDetails';

  constructor(private router: Router,
    public navCtrl: NavController,
    public service: TeacherDataService) {

      this.router.events.subscribe((event: RouterEvent) => {
        this.selectedPath = event.url;
      });

      // this.Teachers.push({name: 'Zaloum', id: 1});
      // this.Teachers.push({name: 'King', id: 2});
      // this.Teachers.push({name: 'Tenshin', id: 3});
      // this.Teachers.push({name: 'Jonji', id: 4});
     }

      //  loadDetail(teacher) {
      //   console.log(teacher);
    
      //   this.navCtrl.navigateForward(
      //     '/teacher-details/' + teacher.id + '/' + teacher.name
      //   ); 
      ////you can work either with a navController or a router
      ////this.router.navigate(['/teacher-details', teacher.id, teacher.name]); //the router puts a slash between the two parameter
      //console.log(teacher.id);
      //}
  
    teacherDetails(teacher) {
      this.navCtrl.navigateForward(
        this.teacher_details_url + '/' + teacher.id + '/' + teacher.name
      );
      console.log('Hey');
    }
  
    getTeachers() {
      this.service.getTeacher().subscribe(teachers => {
        this.tabTeachers.push(teachers);
        console.log(this.tabTeachers[0][0].id);
      });
      console.log(this.tabTeachers);
    }
  

  ngOnInit() {
    this.getTeachers();
  }

}
