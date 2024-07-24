import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {
  param:any;
  queryparam_course:any;
  queryparam_lname:any;
  constructor(private activatedRoute: ActivatedRoute){

  }
  ngOnInit(): void {
    console.log(this.activatedRoute)
    this.param=this.activatedRoute.snapshot.params['username']
    this.queryparam_course=this.activatedRoute.snapshot.queryParams['course']
    this.queryparam_lname=this.activatedRoute.snapshot.queryParams['lastname']
  }
}
