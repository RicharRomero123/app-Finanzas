import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./finanhousing/components/home/home.component";
import {RegisterUserComponent} from "./finanhousing/components/register-user/register-user.component";
import {PageNotFoundComponent} from "./shared/components/page-not-found/page-not-found.component";
import {LoginUserComponent} from "./finanhousing/components/login-user/login-user.component";
import {PaidPlanComponent} from "./finanhousing/components/paid-plan/paid-plan.component";
import {PaymentCalculatorComponent} from "./finanhousing/components/payment-calculator/payment-calculator.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterUserComponent },
  { path: 'login', component: LoginUserComponent },
  { path: 'paid-plan/:id', component: PaidPlanComponent },
  { path: 'payment-calculator', component: PaymentCalculatorComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
