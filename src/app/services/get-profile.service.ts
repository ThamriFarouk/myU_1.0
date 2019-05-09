import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

const server_IP_port = 'http://localhost:4000/';
const URL_Student = server_IP_port + 'students/byUser/';
const URL_prof = server_IP_port + 'profs/byUser/';

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
export class GetProfileService {
  constructor(public http: HttpClient) {}

  getStudentProfile(studentId) {
    // let body = new HttpParams();
    // body = body.set('login', login);
    // body = body.set('password', pwd);
    return this.http.get(URL_Student + studentId, { headers: myHeaders });
  }

  getProfProfile(profId) {
    // let body = new HttpParams();
    // body = body.set('login', login);
    // body = body.set('password', pwd);
    return this.http.get(URL_prof + profId, { headers: myHeaders });
  }
}
