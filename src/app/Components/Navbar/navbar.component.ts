import {Component, signal} from '@angular/core';
import {NotificationsService} from "../../Services/Notifications/notifications.service";
import {sign} from "node:crypto";
import {AuthenticationService} from "../../Services/Authentication/authentication.service";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  loginstatus = signal("Login / Register")
  numofmessages = signal(0)
  messages : MessageEvent[] = []

  constructor(private notifservice : NotificationsService, private authservice : AuthenticationService) {

  }

  ngOnInit() {
    this.CheckLoginStatus()
  }

  CheckLoginStatus() {
    if (this.authservice.activeuser != null) {
      this.loginstatus.set(`${this.authservice.activeuser.username}`)
    }
    else {
      this.loginstatus.set("Login / Register")
    }
  }






}
