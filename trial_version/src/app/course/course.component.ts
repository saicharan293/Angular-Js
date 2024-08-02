import { Component } from '@angular/core';

interface Courses{
  name:string,
  img:string,
  content:string,
  duration:number,
  fee:number
}
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrl: './course.component.css'
})
export class CourseComponent {
  name:string='Course List'
  courseList:Courses[]=[
    {
      name:'Angular',
      img:'first.png',
      content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, dignissimos?',
      duration:60,
      fee:15000
    },
    {
      name:'Node js',
      img:'second.jpeg',
      content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, dignissimos?',
      duration:45,
      fee:15000
    },
    {
      name:'Git and Git hub',
      img:'third.jpeg',
      content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, dignissimos?',
      duration:30,
      fee:15000
    },
    {
      name:'MongoDB',
      img:'fourth.png',
      content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, dignissimos?',
      duration:30,
      fee:15000
    },
    {
      name:'E js',
      img:'fifth.jpeg',
      content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, dignissimos?',
      duration:30,
      fee:15000
    },
    {
      name:'Express js',
      img:'sixth.png',
      content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, dignissimos?',
      duration:30,
      fee:15000
    },
  ]
}
