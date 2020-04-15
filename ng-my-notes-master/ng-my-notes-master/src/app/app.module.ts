import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatButtonModule, MatInputModule, MatSnackBarModule, MatDialogModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';

import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MyNotesAppComponent } from './components/my-notes-app/my-notes-app.component';
import { MyNotesListComponent } from './components/my-notes-list/my-notes-list.component';
import { MyNotesEditorComponent } from './components/my-notes-editor/my-notes-editor.component';
import { MyNotesHeaderComponent } from './components/my-notes-header/my-notes-header.component';
import { MyNotesFooterComponent } from './components/my-notes-footer/my-notes-footer.component';
import { MyNotesLoginComponent } from './components/my-notes-login/my-notes-login.component';

import { MyNotesRegisterComponent } from './components/my-notes-register/my-notes-register.component';

import { EditorService } from './services/EditorService/editor.service';
import { LoginService } from './services/LoginService/login.service';
import { SaveService } from './services/SaveService/save.service';
import { LimitToPipe } from './pipes/limit-to.pipe';
import { RegistrationConfirmationComponent } from './components/registration-confirmation/registration-confirmation.component';
import { AuthGuardGuard } from './guards/AuthGuard/auth-guard.guard';
import { UsersComponent } from './components/users/users.component';
import { DeleteConfirmationDialogComponent } from './Dialogs/delete-confirmation-dialog/delete-confirmation-dialog.component';


const appRoutes: Routes = [
  { path: '', component: MyNotesLoginComponent },
  { path: 'login/register', redirectTo: 'register', pathMatch: 'full' },
  { path: 'register/login', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login/myNotes', redirectTo: 'myNotes', pathMatch: 'full' },
  { path: 'login/users', redirectTo: 'users', pathMatch: 'full' },
  { path: 'users', component: UsersComponent },
  { path: 'myNotes', canActivate: [AuthGuardGuard], component: MyNotesAppComponent },
  { path: 'login', component: MyNotesLoginComponent },
  { path: 'register', component: MyNotesRegisterComponent },
  { path: 'registration-confirmation/login', redirectTo: 'login', pathMatch: 'full' },
  { path: 'registration-confirmation', component: RegistrationConfirmationComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MyNotesAppComponent,
    MyNotesListComponent,
    MyNotesEditorComponent,
    MyNotesHeaderComponent,
    MyNotesFooterComponent,
    MyNotesLoginComponent,
    MyNotesRegisterComponent,
    LimitToPipe,
    RegistrationConfirmationComponent,
    UsersComponent,
    DeleteConfirmationDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes, { useHash: true }),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MatSnackBarModule,
    MatDialogModule
  ],
  providers: [LoginService, EditorService, SaveService],
  bootstrap: [AppComponent],
  entryComponents: [DeleteConfirmationDialogComponent]
})
export class AppModule { }
