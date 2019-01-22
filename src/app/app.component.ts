import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
  isLoggedIn:boolean = false;
  users:string[] = ["Sonu", "Sneha", "Neha"];
  students:any[] = [
    {id:1, name:"Sonu", salary:"10k"},
    {id:2, name:"Sneha", salary:"12k"},
    {id:3, name:"Neha", salary:"30k"},
  ]
}
