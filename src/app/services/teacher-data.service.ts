import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const TeacherDataUrl = 'assets/JSON_files/teacherdata.json';

interface Teachers<T> {
  result: T[];
}

@Injectable({
  providedIn: 'root'
})
export class TeacherDataService {
  constructor(public http: HttpClient) {}
}
