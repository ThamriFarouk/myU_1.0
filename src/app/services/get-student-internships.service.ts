import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';

const localURL = 'assets/JSON_files/studentInternships.json';

const credentials = 'dGVzdDp0ZXN0'; //test:test

const  entete = new HttpHeaders({'Authorization': 'Basic ' + 'dGVzdDp0ZXN0'});
entete.append('Content-Type', 'application/json;charset = utf-8');
entete.append('Accept', 'application/json');
entete.append('cache-control', 'no-cache');
//entete.append('Authorization', 'Basic dGVzdDp0ZXN0');

const server_IP_port = 'http://192.168.1.20:8080';
const URL = server_IP_port + '/sge/api/rest/internshipByStudent/';

@Injectable({
  providedIn: 'root'
})

export class GetStudentInternshipsService {

  constructor(
    public http: HttpClient,
    private nativeHttp: HTTP
    ) { }

  public getStudentInternship()
  {
    return this.http.get(localURL);
  }

  getStudentInternships(id, InternshipID) {
    return this.http.get(URL + id + '/' + InternshipID, { headers: entete}
      );
   }
}