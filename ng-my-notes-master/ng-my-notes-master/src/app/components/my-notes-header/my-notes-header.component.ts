import { Component, OnInit } from '@angular/core';

import { LoginService } from '../../services/LoginService/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'mn-my-notes-header',
  templateUrl: './my-notes-header.component.html',
  styleUrls: ['./my-notes-header.component.scss']
})

export class MyNotesHeaderComponent implements OnInit {

  heading = 'MyNotes';

  anchorState = false;

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
    this.loginService.$login.subscribe((value) => {
      if(value == true)
      {
        this.anchorState = true;

      }
      else if(value == false)
      {
        this.anchorState = false;
        
      }
    })
  }

  login()
  {
    this.loginService.$loginSubject.next(false);
    this.router.navigate(['login']);
  }

  logout()
  {
    this.loginService.logout();
    this.loginService.$loginSubject.next(false);
    this.router.navigate(['login']);
  }

}
