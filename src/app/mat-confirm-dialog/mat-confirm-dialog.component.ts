import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-mat-confirm-dialog',
  templateUrl: './mat-confirm-dialog.component.html',
  styleUrls: ['./mat-confirm-dialog.component.css']
})
export class MatConfirmDialogComponent implements OnInit {

  constructor(private dialogRef:MatDialogRef<MatConfirmDialogComponent> ) { }



  ngOnInit(): void {
  }


  dialogClose(){
    this.dialogRef.close(false);
  }
}
