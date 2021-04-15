import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'myproject';
  public name="Angular"
  public topic = "Data Binding"
  public image="/assets/images/download.jpg"
  onclick()
  {
    console.log("Thank you for subscribing")
  }
  
}
