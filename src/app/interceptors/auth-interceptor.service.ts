import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../core/auth/auth.service';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private authService:AuthService) { }
  
  intercept(request:HttpRequest<any>,next:HttpHandler) : Observable<HttpEvent<any>>{
    if(this.authService.isAuthenticated()){
      request = request.clone({
        setHeaders:{
          Authorization: this.authService.getToken(),
        }
      })
      return next.handle(request)
    };
    return next.handle(request)
  }
}