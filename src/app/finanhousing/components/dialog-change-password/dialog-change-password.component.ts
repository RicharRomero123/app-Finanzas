import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { User } from 'src/app/finanhousing/models/user';
@Component({
  selector: 'app-dialog-change-password',
  templateUrl: './dialog-change-password.component.html',
  styleUrls: ['./dialog-change-password.component.css']
})
export class DialogChangePasswordComponent implements OnInit {

  password?: string;
  newPassword?: string;
  rePassword?: string;
  hide1 = true;
  hide2 = true;
  hide3 = true;
  constructor(public dialogRef: MatDialogRef<DialogChangePasswordComponent>,@Inject(MAT_DIALOG_DATA) public data: User) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
