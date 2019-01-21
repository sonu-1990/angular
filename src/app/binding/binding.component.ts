import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {
  pageTitle:string = "Data binding in angular";
  imageUrl:string = "assets/img.png";
  btnStatus:boolean = false;
  constructor() { }

  ngOnInit() {
  }
  changeTitle() {
    this.pageTitle = "Title gets changed.";
  }

}
