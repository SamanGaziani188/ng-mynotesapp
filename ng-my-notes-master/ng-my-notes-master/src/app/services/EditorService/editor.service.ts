import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EditorService {

  //Observable to display current selected MyNotesListComponent on MyNotesEditorComponent
  $editorSubject: BehaviorSubject<string> = new BehaviorSubject(null);
  $editorObservable: Observable<string>;

  $currentNoteIndexSubject: BehaviorSubject<number> = new BehaviorSubject(null);
  $currentNoteIndex: Observable<number>;

  $currentNoteIdSubject: BehaviorSubject<string> = new BehaviorSubject(null);
  $currentNoteId: Observable<string>;


  notesList: Array<Object>;

  /*notesList = [
    {"note": "Hi", "createdOn": new Date(), "updatedOn": new Date()}, 
    {"note": "Emad", "createdOn": new Date(), "updatedOn": new Date()},
    {"note": "Hey", "createdOn": new Date(), "updatedOn": new Date()}, 
    {"note": "Hello", "createdOn": new Date(), "updatedOn": new Date()}, 
    {"note": "Sample", "createdOn": new Date(), "updatedOn": new Date()},
    ];*/

  //Holds list's text for further passing to MyNotesEditorComponent
  noteHolder: string = null;

  constructor(
    private http: HttpClient,
    public snackBar: MatSnackBar
  ) 
    { 
      this.$editorObservable = this.$editorSubject.asObservable();
      this.$currentNoteIndex = this.$currentNoteIndexSubject.asObservable();
      this.$currentNoteId = this.$currentNoteIdSubject.asObservable();
    }

  //Returns all the saved notes to the MyNotesListComponent.
  getNotesList()
  {
    //return this.notesList;
    var headers = new HttpHeaders(
      {'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('todo-app_token')}`
      }
    );

    return this.http.get(`${environment.apiBaseUrl}/get-my-notes`, { headers })
    .pipe(
      tap((response: Array<Object>) => {
        this.notesList = response;
      })
    );

  }

  //Receives a new note from MyNotesAppComponent and adds it to the saved notes' array.
  addNewNote()
  {
    var headers = new HttpHeaders(
      {'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('todo-app_token')}`
      }
    );

    return this.http.post(`${environment.apiBaseUrl}/add-my-notes`, { "noteText": "<New note>" }, { headers: headers })
    .pipe(
      tap((response) => {
        //Adds new note to the beginning of array.
        this.notesList.unshift({ "userId": response["userId"], "noteId": response["noteId"], "noteText": "<New note>", "createdOn": new Date(), "updatedOn": new Date() });
        this.openSnackBar("New note created.", "Continue");
      })
    )
  }

  //Deletes a note from this.notesList array after receiving prompt from MyNotesEditorComponent
  deleteNote(index, id)
  {
    var headers = new HttpHeaders(
      {'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('todo-app_token')}`
      }
    );

    return this.http.delete(`${environment.apiBaseUrl}/delete-my-notes/${id}`, { headers: headers })
    .pipe(
      tap((response) => {
        console.log("Hi");
        this.notesList.splice(index, 1);
        index = null;
        id = null;
        this.openSnackBar("Note deleted.", "Continue");
      })
    );
  }

  //Saves the note text passed by MyNotesListComponent
  sendNote(note)
  {
    this.noteHolder = note;
  }

  //Returns the text of MyNotesListComponent to MyNotesEditorComponent
  receiveNote()
  {
    return this.noteHolder;
  }

  updateNotesList(data, index, id)
  {
    var headers = new HttpHeaders(
      {'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('todo-app_token')}`
      }
    );

    return this.http.put(`${environment.apiBaseUrl}/update-my-notes/${id}`, 
    {"noteText": data}, { headers: headers })
    .pipe(
      tap((reponse) => {
        this.notesList[index]["noteText"] = data;
        this.notesList[index]["updatedOn"] = new Date();
        
        this.openSnackBar("Note saved.", "Continue");
      })
    );
  }

  openSnackBar(message: string, action: string)
  {
    this.snackBar.open(message, action, {duration: 2000});
  }

}
