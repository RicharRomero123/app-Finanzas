import {Component, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent {
  email:string;
  password:string;

  @ViewChild('loginForm', { static: true })
  loginForm!: NgForm;

  constructor(private userService: UserService, private router: Router) {
    this.email="j.huanca4141@gmail.com";
    this.password="@rduino4141!";
  }
  async login() {
    this.userService.getAll().subscribe((response: any) => {
      response.forEach((element:any)=>{
        if (element.email === this.email && element.password === this.password) {
          localStorage.setItem('user', JSON.stringify(element));
          localStorage.setItem('isAuthenticated', 'true');
          this.navigateToHome();
        }
      })
    });
  }

  navigateToHome() {
    this.router.navigate(['/']);
  }
}
