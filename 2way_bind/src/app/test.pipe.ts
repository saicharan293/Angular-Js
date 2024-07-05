import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'test'
})
export class TestPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    // value is a variiable that stores the value of strings in html 
    console.log(args);
    console.log('company name is: ',value);
    return "company name is confidential";
  }

}
