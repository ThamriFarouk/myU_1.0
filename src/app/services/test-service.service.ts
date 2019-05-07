import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';

const localURL = 'assets/JSON_files/teacherList.json';

const credentials = 'dGVzdDp0ZXN0';

// const entete = new HttpHeaders({ Authorization: 'Basic ' + 'dGVzdDp0ZXN0' });
// entete.append('Content-Type', 'application/json;charset = utf-8');
// entete.append('Accept', 'application/json');
// entete.append('cache-control', 'no-cache');
//  entete.append('Authorization', 'Basic dGVzdDp0ZXN0');

const server_IP_port = 'http://localhost:4000';
const URL = server_IP_port + '/products';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  constructor(public http: HttpClient, private nativeHttp: HTTP) {}

  getProductsService() {
    return this.http.get(URL);
  }
}
