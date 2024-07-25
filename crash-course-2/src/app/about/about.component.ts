import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'cc-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {
  constructor(private activatedRoute:ActivatedRoute){

  }
  param:any;
  ngOnInit(): void {
    // console.log(this.activatedRoute);
    this.param=this.activatedRoute.snapshot.params['username'];
  }
}
