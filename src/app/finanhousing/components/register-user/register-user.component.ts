import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {NgForm} from "@angular/forms";
import {User} from "../../models/user";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit{
  userData: User;
  dataSource: MatTableDataSource<any>;
  password: string[];

  @ViewChild('userForm', { static: true })
  userForm!: NgForm;
  constructor(private userService: UserService, private router: Router) {
    this.userData = {} as User;
    this.dataSource = new MatTableDataSource<any>();
    this.password = ['', ''];
  }
  ngOnInit(): void {
    this.getAllUsers();
  }
  getAllUsers() {
    this.userService.getAll().subscribe((response: any) => {
      this.dataSource.data = response;
    });
  }
  addUser() {
    if (this.isDuplicateUser(this.userData) || this.password[0]!==this.password[1]) {
      console.log("Error: la contraseña no coencide o ya existe un user con UserName o email.");
      return;
    }
    this.userData.password=this.password[0];
    this.userService.create(this.userData).subscribe((response: any) => {
      this.dataSource.data.push({...response});
      this.dataSource.data = this.dataSource.data.map((o: any) => { return o; });
      this.navigateToHome();
    });
  }
  isDuplicateUser(user: User): boolean {
    return this.dataSource.data.some(
      (existingUser: User) =>
        existingUser.userName === user.userName ||
        existingUser.email === user.email
    );
  }
  navigateToHome(){
    this.resetForm();
    this.router.navigate(['/']);
  }
  resetForm(){
    this.userForm.resetForm();
  }
  onSubmit() {
    if (this.userForm.form.valid) {
      console.log('user valid');
      this.addUser();
    }
  }
}
