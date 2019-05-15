import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const localURL = 'assets/JSON_files/studentAttendance.Json';

const server_IP_port = 'http://localhost:4000/';
const URL = server_IP_port + 'studentAttendances/byStudent/';

const myHeaders = new HttpHeaders();
myHeaders.set('Content-Type', 'application/json');
myHeaders.set('Access-Control-Allow-Origin', '*');
myHeaders.set(
  'Access-Control-Allow-Headers',
  'Origin, X-Requested-With, Content-Type, Accept, Authorization'
);

// let token = btoa(login + ':' + password);

@Injectable({
  providedIn: 'root'
})
export class GetStudentAttendanceService {
  constructor(public http: HttpClient) {}

  getStudentAttendance() {
    // return this.http.get(URL + id , { headers: entete}
    // );
    return this.http.get(localURL);
  }

  getStudentAttendances(id) {
    return this.http.get(URL + id, { headers: myHeaders });
  }
}
