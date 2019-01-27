import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user:any;
  constructor(private route:ActivatedRoute, private userService:UserService) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.userService.getUser(id)
      .subscribe(user => this.user = user);
    
  }

}
