import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { Router } from '@angular/router';
import { LoginService } from '../../services/LoginService/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {

  constructor(
    private router: Router, 
    private loginService: LoginService){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      if(!this.loginService.token)
      {
        this.router.navigate(['/']);
      }

      console.log("HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH");

      return true;
  }
}
