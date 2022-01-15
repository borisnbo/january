import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Serie } from '../models/Serie';

@Injectable({
  providedIn: 'root'
})
export class SerieService {

  endpoint: string = 'http://localhost:9898/me/serie';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser = {};

  constructor(
    private http:HttpClient,
    public router:Router
  ) { }

  //

saveSeries(user:Serie){
  return this.http.post(this.endpoint, user, {headers: this.headers});
  }  
//
getSeries(){
  return this.http.get(this.endpoint, {headers:this.headers});
}

//
deleteSeries(serie:number):Observable<Serie>{   
  return this.http.delete(this.endpoint+"/"+ serie)
          .pipe(map((res:any)=>{
       return res;
  }));
}


}