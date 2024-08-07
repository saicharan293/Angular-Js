import { Component, DoCheck, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements OnChanges,OnInit,OnDestroy {

  // @Input()
  // child_ka_parent:string='';

  // number:number=123;
  // //to parent
  // @Output() myevent:any=new EventEmitter();

  // send(){
  //   this.myevent.emit(this.number)
  // }
  @Input() abc:any;

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngonchanges: ",changes)
  }
  ngOnInit(): void {
    console.log("ngOnInit")
  }
  ngDoCheck(): void {
    console.log("ngDoCheck")
  }
  ngOnDestroy(): void {
    console.log("ngOnDestroy")
  }
  
}
