import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {NavbarComponent} from "./Components/Navbar/navbar.component";
import {PostInputComponent} from "./Components/PostInput/post-input.component";
import {AuthenticationService} from "./Services/Authentication/authentication.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, PostInputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'forum-client';

  constructor(private authservice : AuthenticationService) {

  }
  ngOnInit() {
    this.AutoLogin()
  }

  AutoLogin() {
    if (typeof localStorage !== 'undefined') {
      if (localStorage.getItem("usertoken") !== 'undefined') {
        this.authservice.GetActiveUserInfo()
      }
    }
  }

}
