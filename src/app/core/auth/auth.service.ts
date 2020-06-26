import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user';
import { HttpClient } from '@angular/common/http';
import { map , catchError ,tap} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser:User;
  constructor(private http:HttpClient ) { }

  login(user:User){
        this.http.post('login',user).subscribe(res=>{
        this.currentUser = res['data'];
        localStorage.setItem('token',this.currentUser['token']);
        localStorage.setItem('currentUser',JSON.stringify(this.currentUser));
        })
        // "email": "MMMMM@MMM.com",
       // "password": "123456",
  }

  getToken(){
    return localStorage.getItem('token')
  }

  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('currentUser');
  }

  isAuthenticated():boolean{
    return  localStorage.getItem('token') ? true : false;
  }
}
