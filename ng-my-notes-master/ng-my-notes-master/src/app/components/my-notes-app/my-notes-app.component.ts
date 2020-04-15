import { Component, OnInit } from '@angular/core';

import { SaveService } from '../../services/SaveService/save.service';
import { EditorService } from '../../services/EditorService/editor.service';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DeleteConfirmationDialogComponent } from '../../Dialogs/delete-confirmation-dialog/delete-confirmation-dialog.component';

@Component({
  selector: 'mn-my-notes-app',
  templateUrl: './my-notes-app.component.html',
  styleUrls: ['./my-notes-app.component.scss']
})
export class MyNotesAppComponent implements OnInit {

  heading = "Notes";

  constructor(
    private editorSerive: EditorService, 
    private saveService: SaveService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    
  }

  //Prompts the service to take note from Editor and save it.
  saveNote()
  {
    this.saveService.$saveSubject.next(true);
  }

  newNote()
  {
    this.editorSerive.addNewNote().subscribe((value) => {
      
    });
  }

  deleteNote()
  {
    this.saveService.$deleteSubject.next(true);
  }

  openDeleteConfirmDialog()
  {
    let dialog = this.dialog.open(DeleteConfirmationDialogComponent);

    dialog.afterClosed()
    .subscribe(selection => {
      if(selection)
      {
        this.deleteNote();
      }
      else
      {
        //Do nothing.
      }
    })
  }

}
