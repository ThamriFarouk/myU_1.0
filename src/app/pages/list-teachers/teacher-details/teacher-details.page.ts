import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-teacher-details',
  templateUrl: './teacher-details.page.html',
  styleUrls: ['./teacher-details.page.scss'],
})
export class TeacherDetailsPage implements OnInit {

  public person_id;
  public person_name;
  constructor(private route: ActivatedRoute, private http: HttpClientModule) {

  }

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    let name = this.route.snapshot.paramMap.get('name');
    this.person_id = id;
    this.person_name = name;
  }

}
