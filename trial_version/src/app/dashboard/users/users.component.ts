import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {

  studentData:any;

  constructor(private api:ApiService){}

  ngOnInit(): void {
    this.getUsers();
  }
  getUsers(){
    this.api.getusers().subscribe((d:any)=>{
      // console.log(d.data)
      d.data.sort((a:any,b:any)=>{
        return b.user_id-a.user_id
      })
      this.studentData=d.data
    })
  }
  deletedMessage:any;

  deleteUser(userid:any){
    if(confirm('Are you sure to delte? ')){

      // console.log(userid)
      const data=new FormData()
      data.append('u_id',userid)
      this.api.deluser(data).subscribe((data:any)=>{
        // console.log(data)
        this.deletedMessage=data.message;
        // console.log('deleted msg',this.deletedMessage)
        if(data.status==1){
          this.getUsers()
        }
      })
    }
  }
}
