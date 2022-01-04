import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Course } from '../models/Course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  endpoint: string = 'http://localhost:9898/course';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser = {};

  constructor(
    private http:HttpClient,
    public router:Router
  ) { }

  //

saveCourses(user:Course):Observable<Course>{
    return this.http.post<Course>(this.endpoint, user, {headers: this.headers});
  }  
//
getCourses():Observable<Course>{
    return this.http.get<Course>(this.endpoint, {headers:this.headers});
}


}
