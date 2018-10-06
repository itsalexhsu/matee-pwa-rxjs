import { Component, OnInit, Inject } from '@angular/core';

import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-archive-confirmation',
  templateUrl: './archive-confirmation.component.html',
  styleUrls: ['./archive-confirmation.component.scss']
})
export class ArchiveConfirmationComponent {

  constructor(
    public dialogRef: MatDialogRef<ArchiveConfirmationComponent>,
    @Inject(MAT_DIALOG_DATA) public entry) { }

}
