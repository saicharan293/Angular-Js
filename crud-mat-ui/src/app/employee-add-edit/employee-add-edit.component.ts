import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-employee-add-edit',
  templateUrl: './employee-add-edit.component.html',
  styleUrl: './employee-add-edit.component.scss'
})
export class EmployeeAddEditComponent {
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
    private dialog:DialogRef<EmployeeAddEditComponent>
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
  onFormSubmit(){
    if(this.empForm.valid){
      this._empservice.addEmployee(this.empForm.value).subscribe({
        next: (val: any)=>{
          alert('Employee added successfully')
          this.dialog.close();
        },
        error:(err)=>{
          console.log(err)
        }
      })
    }
  }
}
