import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
  }
  pageTitle:string="pipes in angular";
  users:any[] = [
    {id:10,name:"Sonu", city:"Nagpur",salary:20000, DOB:new Date("11/11/1990")},
    {id:11,name:"Sneha", city:"Delhi",salary:40000, DOB:new Date("01/03/1990")},
    {id:12,name:"Rutuja", city:"Pune",salary:30000, DOB:new Date("03/03/1990")},
    {id:13,name:"Neha", city:"Bombay",salary:25000, DOB:new Date("05/10/1990")},
  ];

}
