import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { AuthService } from '../auth/auth.service';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  getBase64:any;
  imageUrl:any;
  password:string;
  showPassword:boolean = true;
  isInvalid:boolean = false;
  privacy:boolean=false;

  @ViewChild('checkBox')el:ElementRef;
  constructor(private auth:AuthService,private notification:NotificationService,private router: Router) { 
    this.imageUrl = '../../../assets/images/register.png';
  }

  ngOnInit(): void {
  }

  getPassword(password){
    this.password = password;
  }

  encodeImageFileAsURL(element) {
    this.getBase64 = new Observable(observer=>{
      var file = element.files[0];
      var reader = new FileReader();
      reader.onloadend = function() {
        observer.next(reader.result)
      }
      reader.readAsDataURL(file);
    }).subscribe(res=>{
        this.imageUrl  = res;
    })
 }

  register(newUser:User){
    newUser.name && newUser.email && newUser.phone && this.imageUrl && this.password  ? 
    (this.isInvalid = false ,
    newUser.image = this.imageUrl ,
    newUser.password = this.password ,
    this.auth.register(newUser).subscribe(res=>{
      this.notification.openSnackBar(res.message);
      this.auth.setUser(res.data);
      this.router.navigate(['home']);
     }) ) 
    : this.isInvalid = true;
  }

}
