import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenserviceService } from './service/tokenservice.service';

@Injectable({
  providedIn: 'root'
})
export class PageOupsGuard implements CanActivate {
  constructor(private router: Router,private tokenService:TokenserviceService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.tokenService.isLogged()){
      return true;
    }
      else{
        return this.router.navigate(["/page-oups"])
      }
  }
  
}
