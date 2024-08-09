import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit{

  ngOnInit(): void {
    //since promise can return only one value (first)
    let pro = new Promise((success,fail)=>{
      let number=40
      if(number%2==0){
        success("even1")
        success("even2")
        success("even3")
        success("even4")
      }else{
        fail("its odd")
      }
    })
    pro.then((res)=>{
      // console.log(res)
    }).catch((res)=>{
      // console.log(res)
    })

    //So , we choose observables to achieve multiple  results
    let obs=new Observable((val)=>{
      val.next('statement1')
      val.next('statement2')
      val.next('statement3')
      val.next('statement4')
    })

    obs.subscribe((res)=>{
      console.log(res)
    })
  }
}
