import { HttpClient,HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Menadzer } from '../interfaces/menadzer';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private apiUrl = 'http://localhost:8080/menadzer/login'; 
  constructor(private http:HttpClient) { }

  login(username: string, password: string): Observable<any> {
   
    let params = new HttpParams()
      .set('username', username)
      .set('password', password);

    return this.http.get<any>(this.apiUrl, { params })
      .pipe(
        catchError(error => {
         
          console.error('Login error:', error);
          throw error;
        })
      );
  }
}
