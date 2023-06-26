import {Component, OnInit} from '@angular/core';
import {User} from "../../../finanhousing/models/user";
import {Router} from "@angular/router";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent{
  user:User
  isAuthenticated:boolean
  constructor(private router: Router) {
    this.user = JSON.parse(localStorage.getItem('user')?? '{}');
    this.isAuthenticated = localStorage.getItem('isAuthenticated')=== 'true';
  }
  logout(){
    this.user = {} as User;
    localStorage.setItem('user', JSON.stringify(this.user));
    localStorage.setItem('isAuthenticated', 'false');
    this.router.navigate(['/login']);
  }
}
