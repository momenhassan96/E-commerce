import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { SharedService } from 'src/app/shared/services/shared.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser:User;
  constructor(private http:HttpClient ,private service:SharedService) { }

  login(user:User) :Observable<any>{
    return this.service.postFunction('login',user)
  }

  setUser(user:User){
    localStorage.setItem('token',user['token']);
    localStorage.setItem('currentUser',JSON.stringify(user));
  }
  
  register(newUser:User):Observable<any>{
    return this.service.postFunction('register',newUser)
  }

  getToken(){
    return localStorage.getItem('token')
  }

  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('currentUser');
    return this.service.postFunction('logout',this.getToken())
    
  }

  isAuthenticated():boolean{
    return  localStorage.getItem('token') ? true : false;
  }
}
