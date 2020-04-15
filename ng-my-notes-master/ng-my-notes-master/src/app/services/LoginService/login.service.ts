import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
//import { importType } from '@angular/compiler/src/output/output_ast';
import { tap } from 'rxjs/operators';
import { LoginResponse } from '../../interfaces/LoginResponse/login-response';

import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  token: string;

  $loginSubject: BehaviorSubject<any> = new BehaviorSubject(null);
  $logoutSubject: BehaviorSubject<any> = new BehaviorSubject(null);

  $login: Observable<any>;
  $logout: Observable<any>;

  constructor(
    private http: HttpClient,
    private router: Router,
    public snackBar: MatSnackBar
  ) {
    this.$login = this.$loginSubject.asObservable();
    this.$logout = this.$logoutSubject.asObservable();

    this.token = localStorage.getItem('todo-app_token');
   }

   login(credentials)
   {
     return this.http.post<LoginResponse>
     (`${environment.apiBaseUrl}/login?userId=${credentials.userId}&password=${credentials.password}`, {})
     .pipe(
       tap((response) => {
        
        this.token = response.token;
        localStorage.setItem('todo-app_token', this.token);
        //console.log(localStorage.getItem('todo-app_token'));
         
       })
     );
   }

   logout()
   {
     this.token = '';
     localStorage.removeItem('todo-app_token');
     this.openSnackBar("Logout successful!", "Login");
   }

   register(credentials)
   {
      console.log("In register()");
      console.log(credentials);
      return this.http.post
      (`${environment.apiBaseUrl}/register`, credentials)
      .pipe(
        tap((response) => {
          //alert(response["status"]);
          if(typeof response["status"] === "undefined")
          {
            console.log('Register API called.');
            this.login(credentials).subscribe(() => {
            this.loginUser();
            });
          }
          else
          {

          }
          
        })
      );
    }

    loginUser()
    {
      this.router.navigate(['/myNotes']);
      this.$loginSubject.next(true);
    }

  openSnackBar(message: string, action: string)
  {
    this.snackBar.open(message, action, {duration: 2000});
  }
}
