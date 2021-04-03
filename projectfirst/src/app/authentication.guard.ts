import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { AuthguardServiceService } from './authguard-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor(private AuthGuardService: AuthguardServiceService,private router:Router){}
  canActivate():boolean {
    if (!this.AuthGuardService.gettoken()) {  
      this.router.navigateByUrl("/login");  
  }  
  return this.AuthGuardService.gettoken(); 
  } 
}