import { Component, OnInit } from '@angular/core';
import { ServicesService } from './services.service';



@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  public ourservices = [];
constructor(private servicesService: ServicesService) { }

  ngOnInit() {
    this.servicesService.getjson()
    .subscribe(data => this.ourservices = data);
    
  }


num = 0;

increment() {
  
    this.num++;
  }

}

