import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'mn-delete-confirmation-dialog',
  templateUrl: './delete-confirmation-dialog.component.html',
  styleUrls: ['./delete-confirmation-dialog.component.scss']
})
export class DeleteConfirmationDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeleteConfirmationDialogComponent>) { }

  ngOnInit() {
  }

  confirmSelection()
  {
    this.dialogRef.close(true);
  }

}
