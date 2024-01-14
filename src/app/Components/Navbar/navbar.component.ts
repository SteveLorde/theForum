import {Component, signal} from '@angular/core';
import {NotificationsService} from "../../Services/Notifications/notifications.service";
import {sign} from "node:crypto";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  authstatus : string = "Login"
  numofmessages = signal(0)
  messages : MessageEvent[] = []

  constructor(private notifservice : NotificationsService) {

  }

  ngOnInit() {

  }




}
