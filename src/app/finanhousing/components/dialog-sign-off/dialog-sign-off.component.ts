import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
@Component({
  selector: 'app-dialog-sign-off',
  templateUrl: './dialog-sign-off.component.html',
  styleUrls: ['./dialog-sign-off.component.css']
})
export class DialogSignOffComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogSignOffComponent>) { }

  ngOnInit(): void {
  }

  closeClick(){
    this.dialogRef.close();
  }
  
}
