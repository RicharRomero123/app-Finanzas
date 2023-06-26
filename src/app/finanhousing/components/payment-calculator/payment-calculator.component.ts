import {Component, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import {Loan} from "../../models/loan";
import {LoanService} from "../../services/loan.service";
import {User} from "../../models/user";

@Component({
  selector: 'app-payment-calculator',
  templateUrl: './payment-calculator.component.html',
  styleUrls: ['./payment-calculator.component.css']
})
export class PaymentCalculatorComponent {
  user:User;
  isAuthenticated:boolean;
  loanData:Loan;

  @ViewChild('calculatorForm', { static: true })
  calculatorForm!: NgForm;
  constructor(private loanService: LoanService,private router: Router) {
    this.loanData = {} as Loan;
    this.user = JSON.parse(localStorage.getItem('user')?? '{}');
    this.isAuthenticated = localStorage.getItem('isAuthenticated')=== 'true';
  }
  addPayment() {
    this.loanData.userId=this.user.id;
    this.loanService.create(this.loanData).subscribe();
    this.resetForm();
    this.navigateToHome();
  }
  navigateToHome(){
    this.resetForm();
    this.router.navigate(['/']);
  }
  resetForm(){
    this.calculatorForm.resetForm();
  }
  onSubmit() {
    if (this.calculatorForm.form.valid) {
      console.log(this.loanData);
      this.addPayment();
    }
  }
}
