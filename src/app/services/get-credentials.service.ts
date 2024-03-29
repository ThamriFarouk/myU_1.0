import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

const server_IP_port = 'http://localhost:4000/';
const URL = server_IP_port + 'users/login';

@Injectable({
  providedIn: 'root'
})
export class GetCredentialsService {
  constructor(public http: HttpClient) {}

  getCredentials(login, pwd) {
    const myHeaders = new HttpHeaders();
    myHeaders.set('Content-Type', 'application/json');
    myHeaders.set('Access-Control-Allow-Origin', '*');
    myHeaders.set(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    let body = new HttpParams();
    body = body.set('login', login);
    body = body.set('password', pwd);
    return this.http.post(URL, body, { headers: myHeaders });
  }
}
