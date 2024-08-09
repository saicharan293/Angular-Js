import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmployeeAddEditComponent } from './employee-add-edit/employee-add-edit.component';
import { EmployeeService } from './services/employee.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { CoreService } from './core/core.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'firstName',
    'lastName',
    'email',
    'dob',
    'gender',
    'education',
    'company',
    'experience',
    'package',
    'action'
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog: MatDialog,
     private empService: EmployeeService,
     private coreService:CoreService
    ) {}

  ngOnInit(): void {
    this.getAllEmployees();
  }

  openAddEditForm() {
    const dialogref=this.dialog.open(EmployeeAddEditComponent);
    dialogref.afterClosed().subscribe({
      next: val => {
        if(val){
          this.getAllEmployees()
        }
      }
    })

  }

  getAllEmployees() {
    this.empService.getEmployeeList().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: console.log,
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteEmp(id:number){
    this.empService.deleteEmployee(id).subscribe({
      next: res=>{
        this.coreService.openSnackBar('Employee Deleted','done')
        this.getAllEmployees();
      },
      error:console.log
    })
  }
  openEdit(data:any){
    const dialogref=this.dialog.open(EmployeeAddEditComponent,{data})
    dialogref.afterClosed().subscribe({
      next: val => {
        if(val){
          this.getAllEmployees()
        }
      }
    })
  }
}
