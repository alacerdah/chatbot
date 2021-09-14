import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-modal-alert',
  templateUrl: './modal-alert.component.html'
})
export class ModalAlertComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ModalAlertComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string
  ) { }

  ngOnInit() {
  }

}
