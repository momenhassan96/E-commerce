import { Injectable } from '@angular/core';
import { HttpInterceptor,HttpRequest,HttpHandler,HttpEvent } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { Observable } from 'rxjs';

@Injectable()
export class ApiUrlHttpInterceptor implements HttpInterceptor {
  private get baseUrl() {
    return environment.apiRoot;
  }

  constructor() { }
  intercept(req: HttpRequest<any>,next: HttpHandler): Observable<HttpEvent<any>>{
    req = req.clone({
      url: this.baseUrl + req.url,
      setHeaders:{
        lang: 'ar',
      }
    });
    return next.handle(req);
  }
}
