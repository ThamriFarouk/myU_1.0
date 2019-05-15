import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';

const localURL = 'assets/JSON_files/studentInternships.json';
const server_IP_port = 'http://localhost:4000/';
const URL = server_IP_port + 'studentInternships/byStudent/';

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
export class GetStudentInternshipsService {
  constructor(public http: HttpClient, private nativeHttp: HTTP) {}

  public getStudentInternship() {
    return this.http.get(localURL);
  }

  getStudentInternships(id) {
    return this.http.get(URL + id, { headers: myHeaders });
  }
}
