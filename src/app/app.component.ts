import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedCountryCode:string;
  title = 'angular';
  isLoggedIn:boolean = false;
  users:string[] = ["Sonu", "Sneha", "Neha"];
  students:any[] = [
    {id:1, name:"Sonu", salary:"10k"},
    {id:2, name:"Sneha", salary:"12k"},
    {id:3, name:"Neha", salary:"30k"},
  ];
  countries:any[] = [
    {code:"Ind", country:"India"},
    {code:"Uae", country:"United Arab Emirates"},
    {code:"UK", country:"United Kingdom"}
  ];
  change(code) {
    this.selectedCountryCode = code;
  }
}
