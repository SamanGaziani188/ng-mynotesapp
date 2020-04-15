import { Component, OnInit, ViewChild } from '@angular/core';
//import { Popup } from 'ng2-opd-popup';

import { EditorService } from '../../services/EditorService/editor.service';
import { SaveService } from '../../services/SaveService/save.service';

@Component({
  selector: 'mn-my-notes-editor',
  templateUrl: './my-notes-editor.component.html',
  styleUrls: ['./my-notes-editor.component.scss']
})
export class MyNotesEditorComponent implements OnInit {

  //@ViewChild('popupSave') popupSave: Popup;

  editorText: string = '';
  currentNoteIndex: number = null;
  currentNoteId: string = '';

  constructor(private editorService: EditorService, private saveService: SaveService) { }

  ngOnInit() {
    this.editorService.$editorObservable.subscribe((value) => {
      this.editorText = value;
    });

    this.editorService.$currentNoteIndex.subscribe((value) => {
      this.currentNoteIndex = value;

      (<HTMLInputElement> document.getElementById("editor")).disabled = false;
    });

    this.editorService.$currentNoteId.subscribe((value) => {
      this.currentNoteId = value;
    });

    this.saveService.$saveObservable.subscribe((value) => {
      if(value == true && this.currentNoteIndex != null)
      {
        this.editorService.updateNotesList(this.editorText, this.currentNoteIndex, this.currentNoteId)
        .subscribe((value) => {
          this.saveService.$saveSubject.next(false);
          this.currentNoteId = null;
          this.currentNoteIndex = null;
        });

        // Success Popup Code
      }
      else if(this.currentNoteIndex == null)
      {
        //Failure Popup Code
        
      }
    });

    this.saveService.$deleteObservable.subscribe((value) => {
      if(value == true && this.currentNoteIndex != null)
      {
        this.editorService.deleteNote(this.currentNoteIndex, this.currentNoteId)
        .subscribe((value) => {
          this.saveService.$deleteSubject.next(false);
          this.currentNoteId = null;
          this.currentNoteIndex = null;
        });
      }
    });
  }

  //Commented-out function may be used in further development.
  /*getText()
  {
    this.editorText = this.editorService.receiveNote();
    console.log(this.editorText);
  }*/

}
