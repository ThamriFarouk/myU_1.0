    import { Injectable } from '@angular/core';
    import { HttpClient, HttpHeaders } from '@angular/common/http';



    const localURL= 'assets/JSON_files/studentAttendance.Json';

    const credentials = 'dGVzdDp0ZXN0';//test:test

    let  entete = new HttpHeaders({'Authorization': 'Basic ' + 'dGVzdDp0ZXN0'});
    // entete.append('Content-Type', 'application/json;charset = utf-8');
    // entete.append('Accept', 'application/json');
    // entete.append('cache-control', 'no-cache');
    // entete.append('Authorization', 'Basic dGVzdDp0ZXN0');

    const server_IP_port = 'http://192.168.1.20:8080';
    const URL = server_IP_port + '/sge/api/rest/studentattendance/';

    //let token = btoa(login + ':' + password);

    @Injectable({
      providedIn: 'root'
    })
    export class GetStudentAttendanceService {


      constructor(public http: HttpClient) { }

      getStudentAttendance() {
        //return this.http.get(URL + id , { headers: entete}
        // );
          return this.http.get(localURL);
      }

      getStudentAttendances(id) {
        return this.http.get(URL + id , { headers: entete}
          );
      }
    }
