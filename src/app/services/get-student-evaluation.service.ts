import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';



const localURL = 'assets/JSON_files/studentEval.json';

const credentials = 'dGVzdDp0ZXN0';

const  entete = new HttpHeaders({'Authorization': 'Basic ' + 'dGVzdDp0ZXN0'});
// entete.append('Content-Type', 'application/json;charset = utf-8');
// entete.append('Accept', 'application/json');
// entete.append('cache-control', 'no-cache');
// entete.append('Authorization', 'Basic dGVzdDp0ZXN0');

const server_IP_port = 'http://192.168.1.20:8080';
const URL = server_IP_port + '/sge/api/rest/eval/';

@Injectable({
  providedIn: 'root'
})
export class GetStudentEvaluationService {

  constructor(public http: HttpClient) { }

  getStudentEvaluation() {
      return this.http.get(localURL);
   }

   getStudentEvaluations(id) {
    return this.http.get(URL + id , { headers: entete}
      );
   }
}
