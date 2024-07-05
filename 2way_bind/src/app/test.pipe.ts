import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'test'
})
export class TestPipe implements PipeTransform {

  transform(person: any, wish: string): string {
    // value is a variiable that stores the value of strings in html 
    if(person.course=='angular' && person.gender=='m'){
      return `${wish},mr ${person.name} let's learn ${person.course}`
    }
    else{
      return `${wish},ms ${person.name} let's learn ${person.course}` 
    }
  }

}
