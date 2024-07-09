import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usercard',
  templateUrl: './usercard.component.html',
  styleUrl: './usercard.component.css'
})
export class UsercardComponent {
  constructor(private us:UserService,private route:ActivatedRoute){}
  cuser:any;
  ngOnInit():void{
    this.route.paramMap.subscribe(
      params=>{
        const idParam = params.get('id');
        if (idParam !== null) {
          const userid = +idParam;
          this.cuser=this.us.users.find(u=>u.id==userid)
        }
      }
    )
    // let userid=+this.route.snapshot.paramMap.get('id');
    // this.cuser=this.us.users.find(u=>u.id==userid)
    

  }
}
