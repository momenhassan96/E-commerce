import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  showPassword:boolean = true;
  isInvalid:boolean = false;
  password:string;
  constructor(private authService:AuthService,private router:Router , private notification:NotificationService, private service:SharedService) { }

  ngOnInit(): void {
  }

  getPassword(event){
    this.password = event;
  }

  login(user:User){
    this.password ? user.password = this.password : ''; 
    user.email &&  this.password ? (this.isInvalid = false , this.authService.login(user).subscribe(res=>{
        this.authService.setUser(res['data']);
        this.notification.openSnackBar(res['message']);
        this.router.navigate(['home']);
    })) : this.isInvalid = true; 
  }
}




