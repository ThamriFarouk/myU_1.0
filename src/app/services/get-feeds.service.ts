import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const localURL = 'assets/JSON_files/studentAttendance.Json';

const server_IP_port = 'http://localhost:4000/';
const paths = [
  'classFeeds/byClass&SchoolYear/',
  'profFeeds/byDepartment&SchoolYear/',
  'schoolFeeds/bySchool&SchoolYear/',
  'studentFeeds/byDepartment&SchoolYear/'
];
const URL = server_IP_port + 'studentDocuments/';

const myHeaders = new HttpHeaders();
myHeaders.set('Content-Type', 'application/json');
myHeaders.set('Access-Control-Allow-Origin', '*');
myHeaders.set(
  'Access-Control-Allow-Headers',
  'Origin, X-Requested-With, Content-Type, Accept, Authorization'
);

@Injectable({
  providedIn: 'root'
})
export class GetFeedsService {
  constructor(public http: HttpClient) {}

  getClassFeed(classId, schoolYear) {
    return this.http.get(
      server_IP_port + paths[0] + classId + '/' + schoolYear,
      { headers: myHeaders }
    );
  }

  getProfFeed(department, schoolYear) {
    return this.http.get(
      server_IP_port + paths[1] + department + '/' + schoolYear,
      { headers: myHeaders }
    );
  }

  getSchoolFeed(school, schoolYear) {
    return this.http.get(
      server_IP_port + paths[2] + school + '/' + schoolYear,
      { headers: myHeaders }
    );
  }

  getStudentFeed(department, schoolYear) {
    return this.http.get(
      server_IP_port + paths[3] + department + '/' + schoolYear,
      { headers: myHeaders }
    );
  }
}
