import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-dialog-change-email',
  templateUrl: './dialog-change-email.component.html',
  styleUrls: ['./dialog-change-email.component.css']
})
export class DialogChangeEmailComponent implements OnInit {

  email?: string;
  password?: string;
  hide = true;

  constructor(public dialogRef: MatDialogRef<DialogChangeEmailComponent>) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
