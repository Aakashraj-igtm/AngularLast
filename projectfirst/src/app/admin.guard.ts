import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { AdminguardServiceService } from './adminguard-service.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private AdminGuardService: AdminguardServiceService,private router:Router){}
  canActivate():boolean {
    if (!this.AdminGuardService.gettoken()) {  
      this.router.navigateByUrl("/login");  
  }  
  return this.AdminGuardService.gettoken(); 
  } 
  
}