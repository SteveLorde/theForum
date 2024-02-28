import {Component, OnInit, signal} from '@angular/core';
import {NotificationsService} from "../../Services/Notifications/notifications.service";
import {sign} from "node:crypto";
import {AuthenticationService} from "../../Services/Authentication/authentication.service";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit{

  loginstatus = signal<string>("")
  numofmessages = signal(0)
  messages : MessageEvent[] = []

  constructor(private notifservice : NotificationsService, private authservice : AuthenticationService) {

  }

  ngOnInit() {
    this.authservice.authStatusObservable.subscribe(value => this.loginstatus.set(value))
  }


  ToggleMobileMenu() {

  }




}
