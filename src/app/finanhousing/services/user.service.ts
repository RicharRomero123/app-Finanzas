import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BaseService} from "../../shared/services/base.service";
import {User} from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService<User>{

  constructor(http: HttpClient) {
    super(http);
    this.basePath = 'http://localhost:3000/api/v1/users';
  }
}
