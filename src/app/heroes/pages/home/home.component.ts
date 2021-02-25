import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../auth/services/user.service';
import { User } from '../../../auth/interfaces/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
    private userService: UserService
    ) { }

  get user() {
    return this.userService.getUser;
  }

  ngOnInit(): void {
  }

  public logout() {
    this.userService.logout();
    this.router.navigateByUrl("/login");
  }
}
