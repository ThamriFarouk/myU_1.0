import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const localURL = 'assets/JSON_files/studentAttendance.Json';

const server_IP_port = 'http://localhost:4000/';
const paths = [
  'classCalendars/byClass&SchoolYear/',
  'examCalendars/byClass&SchoolYear/',
  'profExamsCalendars/byProf&SchoolYear/',
  'schoolCalendars/bySchool&SchoolYear/'
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
export class GetCalendarService {
  constructor(public http: HttpClient) {}

  getClassCalendar(classId, schoolYear) {
    return this.http.get(
      server_IP_port + paths[0] + classId + '/' + schoolYear,
      { headers: myHeaders }
    );
  }

  getExamCalendar(classId, schoolYear) {
    return this.http.get(
      server_IP_port + paths[1] + classId + '/' + schoolYear,
      { headers: myHeaders }
    );
  }

  getProfExamCalendar(profId, schoolYear) {
    return this.http.get(
      server_IP_port + paths[2] + profId + '/' + schoolYear,
      { headers: myHeaders }
    );
  }

  getSchoolCalendar(school, schoolYear) {
    return this.http.get(
      server_IP_port + paths[3] + school + '/' + schoolYear,
      { headers: myHeaders }
    );
  }
}
