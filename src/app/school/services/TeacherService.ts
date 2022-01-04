import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Teacher } from '../models/Teacher';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  endpoint: string = 'http://localhost:9898/teachers';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser = {};

  constructor(
    private http:HttpClient,
    public router:Router
  ) { }

  //

saveTeachers(user:Teacher):Observable<Teacher>{
    return this.http.post<Teacher>(this.endpoint, user, {headers: this.headers});
  }  
//
getTeachers():Observable<Teacher>{
    return this.http.get<Teacher>(this.endpoint, {headers:this.headers});
}


}
