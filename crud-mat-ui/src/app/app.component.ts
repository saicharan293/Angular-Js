import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmployeeAddEditComponent } from './employee-add-edit/employee-add-edit.component';
import { EmployeeService } from './services/employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'crud-mat-ui';

  constructor(private dialog:MatDialog,private empService:EmployeeService){}

  ngOnInit(): void {
    this.getAllEmployees()
  }

  openAddEditForm(){
    this.dialog.open(EmployeeAddEditComponent)
  }

  getAllEmployees(){
    this.empService.getEmployeeList().subscribe({
      next:(res)=>{
        console.log(res)
      },
      error: console.log
    })
  }
}
