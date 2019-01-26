import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  users:any;
  errorMessage:string = "Loading....";
  constructor(private userService:UserService) { }

  ngOnInit() {
    //this.users = this.userService.getAllUsers();
    this.userService.getAllUsers().subscribe((data)=>{
      this.users = data;
    },(err)=> {
      console.log(err);
      this.errorMessage = err;
    });
  }
  pageTitle:string="pipes in angular";
 

}
