import { Component } from '@angular/core';
import {User} from "./finanhousing/models/user";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'finanhousing-app';
  userData: User;
  constructor() {
    this.userData = {} as User;
  }
  ngOnInit() {
    localStorage.setItem('user', JSON.stringify(this.userData));
    localStorage.setItem('isAuthenticated', 'false');
  }
}
