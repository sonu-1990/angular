import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  users:any[];
  constructor(private userService:UserService) { }

  ngOnInit() {
    this.users = this.userService.getAllUsers();
  }
  pageTitle:string="pipes in angular";
 

}
