import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { LoginService } from '../../services/LoginService/login.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'mn-my-notes-login',
  templateUrl: './my-notes-login.component.html',
  styleUrls: ['./my-notes-login.component.scss']
})
export class MyNotesLoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private router: Router, 
    private formBuilder: FormBuilder, 
    private loginService: LoginService,
    public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.createForm();
    console.log(this.loginForm);
  }

  createForm()
  {
    this.loginForm = this.formBuilder.group({
      userId: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  validateUser()
  {
    if(this.loginForm.status === "VALID")
    {
      console.log(this.loginForm.value);
      this.loginService.login(this.loginForm.value)
      .subscribe((result) => 
      {
        this.loginUser();
        this.openSnackBar("Login successful.", "Continue");
      },
      (err) => 
      {
        this.openSnackBar("Invalid Email or Password!", "Try again");
      }
    );
    }
    else
    {
      this.openSnackBar("Email and password are required fields!", "Continue");
    }

    //this.loginUser();
  }

  loginUser()
  {
    this.router.navigate(['/myNotes']);
    this.loginService.$loginSubject.next(true);
  }

  openSnackBar(message: string, action: string)
  {
    this.snackBar.open(message, action, {duration: 2000});
  }

}
