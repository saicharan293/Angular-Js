import {Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent { // Implement AfterViewInit
  title = '2way_bind';

  // Added type annotation
  @ViewChild('para') p!: ElementRef; 
  @ViewChildren('heading') h!: QueryList<ElementRef>;
  test(){
    //to access first p having para as ref variable
    console.log(this.p.nativeElement.innerText);

    //to access first h element with heading as ref variable
    console.log(this.h.first.nativeElement.innerText);

    //to access last h element with heading as ref variable
    console.log(this.h.last.nativeElement.innerText);

    // to access the array of h elements having heading as ref variable
    // using .toArray()
    const headingArray = this.h.toArray();
    headingArray.forEach(ele=>console.log(ele.nativeElement.innerText))

    // using forEach method on the object directly
    // this.h.forEach((ele) => {
    //   console.log(ele.nativeElement.innerText);
    // });
  }


}