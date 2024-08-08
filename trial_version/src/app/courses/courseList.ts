interface Courses{
    id:number,
    name:string,
    img:string,
    content:string,
    duration:number,
    fee:number,
    type:string
  }

export class CourseLists{
    courses : Courses[] = [
        {
          id:1,
          name:'Angular',
          img:'first.png',
          content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, dignissimos?',
          duration:60,
          fee:15000,
          type:'frontend'
        },
        {
          id:2,
          name:'Node js',
          img:'second.jpeg',
          content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, dignissimos?',
          duration:45,
          fee:15000,
          type:'backend'
        },
        {
          id:3,
          name:'Git and Git hub',
          img:'third.jpeg',
          content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, dignissimos?',
          duration:30,
          fee:15000,
          type:'database'
        },
        {
          id:4,
          name:'MongoDB',
          img:'fourth.png',
          content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, dignissimos?',
          duration:30,
          fee:15000,
          type:'database'
        },
        {
          id:5,
          name:'E js',
          img:'fifth.jpeg',
          content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, dignissimos?',
          duration:30,
          fee:15000,
          type:'frontend'
        },
        {
          id:6,
          name:'Express js',
          img:'sixth.png',
          content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, dignissimos?',
          duration:30,
          fee:15000,
          type:'backend'
        },
      ]
}