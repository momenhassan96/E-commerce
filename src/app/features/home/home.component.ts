import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  image;
  constructor(private servcice:SharedService) { 
    this.servcice.getFunction('home').subscribe(res=>{
      this.image = res.data.banners[3].image;
    })
  }

  ngOnInit(): void {
  }

}
