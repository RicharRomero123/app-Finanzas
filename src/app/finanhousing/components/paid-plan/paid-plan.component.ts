import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {LoanService} from "../../services/loan.service";
import {ActivatedRoute} from "@angular/router";
@Component({
  selector: 'app-paid-plan',
  templateUrl: './paid-plan.component.html',
  styleUrls: ['./paid-plan.component.css']
})
export class PaidPlanComponent implements OnInit, AfterViewInit {
  nameProyect: String;
  van: number;
  tir: number;
  dataTable: MatTableDataSource<any>;
  displayedColumns: string[] = ['month', 'quota', 'interest', 'amortization', 'balance'];

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;

  @ViewChild(MatSort)
  sort!: MatSort;
  constructor(private route: ActivatedRoute, private loanService: LoanService) {
    this.nameProyect = "";
    this.dataTable = new MatTableDataSource<any>();
    this.van=0;
    this.tir=0;
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const loanId = params['id'];
      this.loanService.getById(loanId).subscribe(
        (loanData: any) => {
          this.nameProyect = loanData.name;
          this.calculatePlans(loanData);
        },
        (error: any) => {
          console.error('Error retrieving loan data:', error);
        }
      );
    });
  }
  ngAfterViewInit(): void {
    if (this.paginator && this.sort) {
      this.dataTable.paginator = this.paginator;
      this.dataTable.sort = this.sort;
    }
  }
  calculatePlans(loanData: any) {
    const loan = loanData;

    // Convertir el plazo del préstamo a meses
    let months = loan.time;
    if (loan.timeFormat === 'Dias') {
      months = loan.time / 30;
    } else if (loan.timeFormat === 'Años') {
      months = loan.time * 12;
    }

    // Convertir la tasa de interés anual a una tasa de interés mensual
    let monthlyInterestRate = loan.rate / 12;
    if (loan.interestRateType === 'Efectiva') {
      monthlyInterestRate = Math.pow(1 + loan.rate, 1 / 12) - 1;
    }

    const loanAmount = loan.amount - loan.initialPayment;

    const planData = [];
    let balance = loanAmount;

    let interest = balance * monthlyInterestRate;

    // Inicio del cálculo de VAN
    let VAN = -loan.initialPayment;

    for (let i = 0; i <= months; i++) {
      let amortization;
      let quota;

      if (i < loan.totalGracePeriod) {
        quota = 0;
        interest = 0;
        amortization = 0;
      } else if (i < loan.totalGracePeriod + loan.partialGracePeriod) {
        quota = interest;
        amortization = 0;
      } else {
        quota =
          loanAmount *
          (monthlyInterestRate / (1 - Math.pow(1 + monthlyInterestRate, -months)));
        amortization = quota - interest;
      }

      balance -= amortization;

      planData.push({
        month: i,
        quota: quota.toFixed(2),
        interest: interest.toFixed(2),
        amortization: amortization.toFixed(2),
        balance: balance.toFixed(2),
        currency: loan.currency,
      });

      interest = balance * monthlyInterestRate;

      // Agregar el cálculo de VAN dentro del bucle
      VAN += quota / Math.pow(1 + loan.rate, i / 12);

      if (balance <= 0) {
        break; // interrumpir el bucle una vez que el saldo se ha reducido a 0
      }
    }

    // Descontar el valor final de la vivienda al VAN
    VAN += loan.futureValue / Math.pow(1 + loan.rate, months / 12);

    // Escribir el valor del VAN y la TIR
    console.log('TIR:', loan.rate);
    console.log('VAN:', VAN);

    this.tir=loan.rate;
    this.van=VAN;

    this.dataTable.data = planData;
  }


}
