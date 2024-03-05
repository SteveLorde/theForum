import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {NavbarComponent} from "./Components/Navbar/navbar.component";
import {PostInputComponent} from "./Components/PostInput/post-input.component";
import {AuthenticationService} from "./Services/Authentication/authentication.service";
import {NotificationsMenuComponent} from "./Components/NotificationsMenu/notifications-menu.component";
import {NotificationsService} from "./Services/Notifications/notifications.service";
import {HeaderAdComponent} from "./Components/Advertising/HeaderAd/header-ad.component";
import {FootbarComponent} from "./Components/Footbar/footbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, PostInputComponent, NotificationsMenuComponent, HeaderAdComponent, FootbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'forum-client';
  notifComponent : any

  constructor(private authservice : AuthenticationService, private notifservice: NotificationsService) {
    //this.notifComponent = document.getElementById("notifmenu")
  }
  ngOnInit() {
    this.notifservice.showNotificationMenu.subscribe(res => {
      if (res) {
        this.notifComponent.style.display = "block"
      }
      else {
        this.notifComponent.style.display = "none"
      }
    })
    //this.AutoLogin()
  }

  AutoLogin() {
    this.authservice.GetActiveUserInfo()
  }

}
