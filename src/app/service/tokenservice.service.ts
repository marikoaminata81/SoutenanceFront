import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TokenserviceService {

  constructor(private router: Router) { }
  
  saveToken(token: string): void{
    localStorage.setItem('token', token)
    this.router.navigate(['tabs/tab1'])
  }

  isLogged(): boolean{
    const token = localStorage.getItem('token')
    console.log(token)
    return !! token
  }
  isLoggedd(): boolean{
    const token = coo
    console.log(token)
    return !! token
  }
}