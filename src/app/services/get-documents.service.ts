import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const localURL = 'assets/JSON_files/studentAttendance.Json';

const server_IP_port = 'http://localhost:4000/';
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
export class GetDocumentsService {
  constructor(public http: HttpClient) {}

  getDocuments() {
    return this.http.get(URL, { headers: myHeaders });
  }
}
