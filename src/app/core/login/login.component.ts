import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { AuthService } from '../auth/auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  showPassword:boolean = true;
  isInvalid:boolean = false;
  constructor(private authService:AuthService,private http:HttpClient) { }

  ngOnInit(): void {
  }

  login(user:User){
    user.email &&  user.password ? this.isInvalid = false && this.authService.login(user) : this.isInvalid = true; 
  }
}




