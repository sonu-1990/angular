import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <p>
      child works! {{ uname }}
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

}
