import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CoreService } from '../core/core.service';

@Component({
  selector: 'app-employee-add-edit',
  templateUrl: './employee-add-edit.component.html',
  styleUrl: './employee-add-edit.component.scss'
})
export class EmployeeAddEditComponent implements OnInit{
  empForm: FormGroup;
  education:string[]=[
    'Matric',
    'Intermediate',
    'Diploma',
    'Graduate',
    'Post-graduate'
  ]
  constructor(private formBuilder:FormBuilder,
    private _empservice:EmployeeService,
    private dialog:MatDialogRef<EmployeeAddEditComponent>,
    @Inject (MAT_DIALOG_DATA) public data:any,
    private coreService:CoreService
  ){
    this.empForm=this.formBuilder.group({
      firstName:'',
      lastName:'',
      email:'',
      dob:'',
      gender:'',
      education:'',
      company:'',
      experience:'',
      package:''
    })
  }
  ngOnInit(): void {
    this.empForm.patchValue(this.data)
  }
  onFormSubmit(){
    if(this.empForm.valid){
      if(this.data){
        this._empservice.updateEmployee(this.data.id,this.empForm.value).subscribe({
          next: (val: any)=>{
            this.coreService.openSnackBar('Form updated!!')
            this.dialog.close(true);
          },
          error:(err)=>{
            console.log(err)
          }
        })
      }else{
        this._empservice.addEmployee(this.empForm.value).subscribe({
          next: (val: any)=>{
            this.coreService.openSnackBar('Employee added successfully')
            this.dialog.close(true);
          },
          error:(err)=>{
            console.log(err)
          }
        })
      }
    }
  }
}
