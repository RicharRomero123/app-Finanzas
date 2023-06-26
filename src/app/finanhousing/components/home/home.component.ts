import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {LoanService} from "../../services/loan.service";
import {User} from "../../models/user";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,AfterViewInit{
  user:User
  isAuthenticated:boolean
  dataTable: MatTableDataSource<any>;
  displayedColumns: string[] = ['id', 'name'];

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;

  @ViewChild(MatSort)
  sort!: MatSort;
  constructor(private loanService: LoanService,private router: Router) {
    this.dataTable = new MatTableDataSource<any>();
    this.user = JSON.parse(localStorage.getItem('user')?? '{}');
    this.isAuthenticated = localStorage.getItem('isAuthenticated')=== 'true';
  }
  ngOnInit() {
    this.getByLoans();
  }

  async getByLoans() {
    this.loanService.getAll().subscribe((response: any) => {
      response.forEach((element:any)=>{
        if(element.userId===this.user.id){
          this.dataTable.data.push(element);
        }
      })
      this.dataTable.paginator = this.paginator; // Agregar el paginador a la instancia de MatTableDataSource
      this.dataTable.sort = this.sort; // Agregar el ordenador a la instancia de MatTableDataSource
    });
  }
  ngAfterViewInit(): void {
    if (this.paginator && this.sort) {
      this.dataTable.paginator = this.paginator;
      this.dataTable.sort = this.sort;
    }
  }
  onRowClick(element: any) {
    const elementId=element.id;
    this.router.navigate(['/paid-plan', elementId]);
  }
}
