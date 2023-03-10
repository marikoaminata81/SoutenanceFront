import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/api/v1/test/';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  // getPublicContent(): Observable<any> {
  //   return this.http.get(API_URL + 'all', { responseType: 'text' });
  // }

  // getUserBoard(): Observable<any> {
  //   return this.http.get(API_URL + 'user', { responseType: 'text' });
  // }

 
  videoforUser(id:number): Observable<any> {
    return this.http.get( `http://localhost:8080/api/v1/video/videoParUser/${id}`)

  }
  getAllVideo():Observable<any>{
    return this.http.get("http://localhost:8080/api/v1/video/all")
  }
}