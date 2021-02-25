import { Heroe } from './../../interfaces/heroe';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Heroe
    ) { }

  ngOnInit() {
  }

  public confirm() {
    this.dialogRef.close(true);
  }

  public cancel() {
    this.dialogRef.close(false);
  }
}
