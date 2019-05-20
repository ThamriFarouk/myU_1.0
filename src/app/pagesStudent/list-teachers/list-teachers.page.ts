import { Component, OnInit } from '@angular/core';
import { Teacher } from 'src/app/models/commonModels/teacher';
import { Router, RouterEvent } from '@angular/router';
import { NavController } from '@ionic/angular';
import { TeacherDataService } from 'src/app/services/teacher-data.service';

@Component({
  selector: 'app-list-teachers',
  templateUrl: './list-teachers.page.html',
  styleUrls: ['./list-teachers.page.scss']
})
export class ListTeachersPage implements OnInit {
  ngOnInit() {}
}
