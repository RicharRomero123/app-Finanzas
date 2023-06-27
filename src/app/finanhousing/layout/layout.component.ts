import { BreakpointObserver } from '@angular/cdk/layout';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { NavigationEnd, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { delay, filter } from 'rxjs';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogSignOffComponent } from 'src/app/finanhousing/components/dialog-sign-off/dialog-sign-off.component';
import { DialogChangePasswordComponent } from 'src/app/finanhousing/components/dialog-change-password/dialog-change-password.component';
import { DialogChangeEmailComponent } from 'src/app/finanhousing/components/dialog-change-email/dialog-change-email.component';
import {User} from "../models/user";

@UntilDestroy()
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements AfterViewInit {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  @ViewChild('rightSidenav') rightSidenav!: MatSidenav;

  user:User
  isAuthenticated:boolean
  email?: string;
  password?: string;
  newPassword?: string;
  rePassword?: string;

  constructor(private observer: BreakpointObserver, private router: Router, public dialog: MatDialog) {
    this.user = JSON.parse(localStorage.getItem('user')?? '{}');
    this.isAuthenticated = localStorage.getItem('isAuthenticated')=== 'true';
  }

  ngAfterViewInit(): void {
    this.observer
      .observe(['(max-width: 800px)'])
      .pipe(delay(1), untilDestroyed(this))
      .subscribe(res => {
        if (res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
      });

    this.router.events
      .pipe(
        untilDestroyed(this),
        filter(e => e instanceof NavigationEnd)
      )
      .subscribe(() => {
        if (this.sidenav.mode === 'over') {
          this.sidenav.close();
        }
      });
  }

  openDialogChangePassword(){
    const dialogRef = this.dialog.open(DialogChangePasswordComponent, {
      width: '400px',
      data: {
        password: this.password,
        newPassword: this.newPassword,
        rePassword: this.rePassword
      }
    })
  }

  openDialogSignOff(){
    const dialogRef = this.dialog.open(DialogSignOffComponent, {
      width: '400px'
    })
  }


  openDialogChangeEmail(){
    const dialogRef = this.dialog.open(DialogChangeEmailComponent, {
      width: '400px'
    })
  }

  logout(){
    this.user = {} as User;
    localStorage.setItem('user', JSON.stringify(this.user));
    localStorage.setItem('isAuthenticated', 'false');
    this.router.navigate(['/login']);
  }


}
