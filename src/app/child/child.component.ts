import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
//import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-child',
  template: `
    <p>
      child works! {{ uname }}
      <br/><button (click)="childMethod()">Click me</button>
    </p>
  `,
  styles: [`
  p {
    color:red;
  }
  `]
})
export class ChildComponent implements OnInit {
  @Input()
  uname:string;
  constructor() { }

  ngOnInit() {
  }
  @Output()
  notify:EventEmitter<string> = new EventEmitter<string>();
  childMethod(){
    this.notify.emit("This message is from child");
  }

}
