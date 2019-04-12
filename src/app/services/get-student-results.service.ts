import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';

const localURL = 'assets/JSON_files/studentResults.json';

const credentials = 'dGVzdDp0ZXN0';

const entete = new HttpHeaders({ Authorization: 'Basic ' + 'dGVzdDp0ZXN0' });
entete.append('Content-Type', 'application/json;charset = utf-8');
entete.append('Accept', 'application/json');
entete.append('cache-control', 'no-cache');
// entete.append('Authorization', 'Basic dGVzdDp0ZXN0');

const server_IP_port = 'http://192.168.1.20:8080';
const URL = server_IP_port + '/sge/api/rest/pvResult/';

@Injectable({
  providedIn: 'root'
})
export class GetStudentResultsService {
  constructor(public http: HttpClient, private nativeHttp: HTTP) {}

  public getStudentResult() {
    return this.http.get(localURL);
  }

  getStudentResults(id) {
    return this.http.get(URL + id, { headers: entete });
  }
}
