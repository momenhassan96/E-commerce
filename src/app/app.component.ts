import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private http: HttpClient) {
}

  login() {
    // let data = {
    //   email: 'algazzar.abdelrahman@gmail.com',
    //   password: '123456',
    // };
    // let headers = new HttpHeaders();
    // headers = headers.set('lang', 'ar');
    // let options = {
    //   headers: headers,
    // };
    // this.http
    //   .post('https://student.valuxapps.com/api/login', data, options)
    //   .subscribe((res) => {
    //     console.log(res);
    //   });

    // let options = {
    //   headers: new HttpHeaders({
    //     lang: 'ar',
    //   }),
    // };
    let params = {
      // "name": "MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM",
      // "phone": "89898989898989",
      "email": "MMMMM@MMM.com",
      "password": "123456",
      // "image": ''
    }
    this.http.post('login',params).subscribe((res) => {
      console.log(res);
    });
  }
}
