import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { ToolbarComponent } from './shared/components/toolbar/toolbar.component';
import { HomeComponent } from './finanhousing/components/home/home.component';
import { LoginUserComponent } from './finanhousing/components/login-user/login-user.component';
import { RegisterUserComponent } from './finanhousing/components/register-user/register-user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AppRoutingModule} from "./app-routing.module";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import {MatToolbarModule} from "@angular/material/toolbar";
import {FormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {HttpClientModule} from "@angular/common/http";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import { PaymentCalculatorComponent } from './finanhousing/components/payment-calculator/payment-calculator.component';
import { PaidPlanComponent } from './finanhousing/components/paid-plan/paid-plan.component';
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    ToolbarComponent,
    HomeComponent,
    LoginUserComponent,
    RegisterUserComponent,
    PaymentCalculatorComponent,
    PaidPlanComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatToolbarModule,
    MatIconModule,
    FormsModule,
    MatFormFieldModule,
    HttpClientModule,
    MatButtonModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
