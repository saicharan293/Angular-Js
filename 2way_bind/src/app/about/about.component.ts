import { Component } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  constructor(private testService:TestService){}
  mobiles=this.testService.mobiles;
}
