import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';

const localURL = 'assets/JSON_files/studentResults.json';

const server_IP_port = 'http://localhost:4000/';
const URL = server_IP_port + 'studentResults/byStudent/';

@Injectable({
  providedIn: 'root'
})
export class GetStudentResultsService {
  constructor(public http: HttpClient, private nativeHttp: HTTP) {}

  public getStudentResult() {
    return this.http.get(localURL);
  }

  getStudentResults(id) {
    const myHeaders = new HttpHeaders();
    myHeaders.set('Content-Type', 'application/json');
    myHeaders.set('Access-Control-Allow-Origin', '*');
    myHeaders.set(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    return this.http.get(URL + id, { headers: myHeaders });
  }
}
