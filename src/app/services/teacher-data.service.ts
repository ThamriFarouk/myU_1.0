import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';
import { Teacher } from 'src/app/models/teacher';



const TeacherDataUrl = 'assets/JSON_files/teacherdata.json';

interface Teachers<T> {
  result: T[];
}

@Injectable({
  providedIn: 'root'
})
export class TeacherDataService {


  constructor(public http: HttpClient) { }



  public getTeacher()//: Observable<Teacher[]>
  {
    //console.log(this.http.get<Teacher[]>(TeacherDataUrl));

    return this.http.get(TeacherDataUrl);
  }
}
