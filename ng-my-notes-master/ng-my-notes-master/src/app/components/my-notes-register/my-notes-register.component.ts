import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { LoginService } from '../../services/LoginService/login.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'mn-my-notes-register',
  templateUrl: './my-notes-register.component.html',
  styleUrls: ['./my-notes-register.component.scss']
})
export class MyNotesRegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(
    private router: Router, 
    private http: HttpClient,
    private loginService: LoginService,
    public snackBar: MatSnackBar,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm()
  {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      userId: ['', Validators.required],
      password: ['', Validators.required],
      age: ['', Validators.required],
      profession: ['', Validators.required]
    });
  }

  registerUser()
  {
    if(this.registerForm.status  === "VALID")
    {
      //console.log(this.registerForm.value);
      this.loginService.register(this.registerForm.value)
      .subscribe((result) => {
        //this.loginUser();
        console.log(typeof result["status"]);
        if(typeof result["status"] === "undefined")
        {
          this.openSnackBar("User registered successfully. You'are now logged in.", "Continue");
        }
        else
        {
          this.openSnackBar("Email already exists.", "Try again");
        }
        
      },
      (err) => 
      {
        
      } 
        
      ); 
    }
    else
    {
      this.openSnackBar("All fields are required.", "Continue");
    }
  }

  loginUser()
  {
    this.router.navigate(['/registration-confirmation']);
    this.loginService.$loginSubject.next(true);
  }

  openSnackBar(message: string, action: string)
  {
    this.snackBar.open(message, action, {duration: 2000});
  }

}
