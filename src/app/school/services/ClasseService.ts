import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Classe } from '../models/Classe';

@Injectable({
  providedIn: 'root'
})

export class ClasseService {

  endpoint: string = 'http://localhost:9898/me/classe';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser = {};

  constructor(
    private http:HttpClient,
    public router:Router
  ) { }

  //

saveClasses(classe:Classe){
  return this.http.post(this.endpoint, classe, {headers: this.headers});
  }  
//
getClasses(){
    return this.http.get(this.endpoint, {headers:this.headers});
}
getLeves(){
    return this.http.get('http://localhost:9898/me/level', {headers:this.headers});
}

getSeries() {
  return this.http.get('http://localhost:9898/me/serie', {headers:this.headers});
}

//
deleteClasses(classe:number):Observable<Classe>{   
  return this.http.delete(this.endpoint+"/"+ classe)
          .pipe(map((res:any)=>{
       return res;
  }));
}


}