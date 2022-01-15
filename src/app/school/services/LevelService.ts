import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Level } from '../models/Level';

@Injectable({
  providedIn: 'root'
})
export class LevelService {

  endpoint: string = 'http://localhost:9898/me/level';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser = {};

  constructor(
    private http:HttpClient,
    public router:Router
  ) { }

  //
  getSeries() {
    return this.http.get('http://localhost:9898/me/serie', {headers:this.headers});
  }
  
saveLevels(level:Level){
  return this.http.post(this.endpoint, level, {headers: this.headers});
  }  
//
getLevels(){
  return this.http.get(this.endpoint, {headers:this.headers});
}

//
deleteLevels(level:number):Observable<Level>{   
  return this.http.delete(this.endpoint+"/"+ level)
          .pipe(map((res:any)=>{
       return res;
  }));
}


}