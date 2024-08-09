import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Student Portal';

  @ViewChild('myModal') model:ElementRef | undefined;

  openModal(){
    // debugger
    const model=document.getElementById('myModal')
    if(model != null){
      model.style.display='block'
    }
  }
  
  closeModal(){
    if(this.model!=null){
      this.model.nativeElement.style.display='none'
    }
    
  }
}
