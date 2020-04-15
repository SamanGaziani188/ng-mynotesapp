import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Users } from '../../interfaces/UsersInterface/users';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  //users: Array<Object>;

  constructor(
    private http: HttpClient
  ) 
  {
    this.http.get(`${environment.apiBaseUrl}/users`)
    .subscribe((response) => {
      localStorage.setItem('my-notes_app', JSON.stringify(response));
    });
  }

  /*getUsers()
  {
    return this.http.get('http://127.0.0.1:3000/get-users')
    .pipe(
      tap((response: Users) => {
        //this.users = response.users;
        localStorage.setItem('my-notes_app', JSON.stringify(response));
      })
    );
  }*/
}
