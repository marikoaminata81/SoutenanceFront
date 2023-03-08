import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Icredentials } from '../Interface/icredentials';
import { Observable } from 'rxjs';
import { Itokens } from '../Interface/itokens';
import { IcredentialsInscription } from '../Interface/icredentialsInscription';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  url = 'http://localhost:8080/api/v1/auth/connexion'

  constructor(private http: HttpClient) { }

  login(credentials: Icredentials): Observable<Itokens>{
      return this.http.post<Itokens>(`http://localhost:8080/api/v1/auth/connexion`, credentials)
    }
    
    url1 = 'http://localhost:8080/api/v1/auth/inscription'

   
  register(credentials:IcredentialsInscription): Observable<any> {
    return this.http.post<Itokens>(this.url1, credentials)
  }

  



    // verification si le token est expiré ou pas
    public isAuthenticated(): boolean {
      const token = window.sessionStorage.getItem('auth-user');
      // Check whether the token is expired and return
      // true or false
      //return !this.jwtHelper.isTokenExpired(token);
      if(token){
        return true
      }else{
        return false;
      }
    }
}