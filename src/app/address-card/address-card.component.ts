import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {
  user:any;
  show="green";
  
  constructor() { 
    this.user ={
      name:'foo bar',
      title:'soft developer',
      address:'1234 main street',
      phone:[
        '123-123-123',
        '456-456-456',
        '789-789-789'
      ]
      
    };

  }

  ngOnInit(): void {
  }

}
