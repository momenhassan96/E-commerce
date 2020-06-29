import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http:HttpClient) { }


  postFunction(url:string,params:Object):Observable<any>{
    return this.http.post(url,params);
  }

  getFunction(url:string):Observable<any>{
    return this.http.get(url);
  }

  putFunction(url:string,params:object):Observable<any>{
    return this.http.put(url,params);
  }

  deleteFunction(url:string):Observable<any>{
    return this.http.delete(url);
  }
  
}
