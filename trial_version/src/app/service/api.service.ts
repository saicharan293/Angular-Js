import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http:HttpClient) {

  }
  url:string='http://ilandertech.com/api/index.php/Welcome/'
  register(data:any){
    return this.http.post(this.url+'/AddStuRegister',data)
  }

  login(data:any){
    return this.http.post(this.url+'StuLogin',data)
  }
  getusers(){
    return this.http.get(this.url+'getStuUsers')
  }
  deluser(userId:any){
    return this.http.post(this.url+'DeleteStuUsers',userId)
  }

}
