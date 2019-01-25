import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <p>
      child works!
    </p>
  `,
  styles: [`
  p {
    color:red;
  }
  `]
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
