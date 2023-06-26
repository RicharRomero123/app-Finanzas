import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service";
import {HttpClient} from "@angular/common/http";
import {Loan} from "../models/loan";

@Injectable({
  providedIn: 'root'
})
export class LoanService extends BaseService<Loan>{

  constructor(http: HttpClient) {
    super(http);
    this.basePath = 'http://localhost:3000/api/v1/loans';
  }
}
