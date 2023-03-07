import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class TokenserviceService {

  constructor(private router: Router, private cookieService: CookieService) { }
  
  saveToken(token: string): void{
    localStorage.setItem('token', token)
    this.router.navigate(['tabs/tab1'])
  }

  isLogged(): boolean{
    const token = localStorage.getItem('token')
    console.log(token)
    return !! token
  }
  // isLoggedd(): boolean{
  //   const token = this.cookieService.get('token');
  //   console.log('iciiiiiiiiiiiiii');
    
  //   console.log(token)
  //   return !! token
  // }
}