import {Inject, Injectable, PLATFORM_ID, signal} from '@angular/core';
import {isPlatformBrowser} from "@angular/common";
import {environment} from "../../../environments/environment";
import {BehaviorSubject, Observable, Subject} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  isBrowser : boolean

  backendurl = environment.backendurl
  sse : EventSource
  messages : MessageEvent[] = []


  constructor(@Inject(PLATFORM_ID) private platformid : any ) {
    this.isBrowser = isPlatformBrowser(this.platformid)
    if (this.isBrowser) {
      //this.sse = new EventSource(`${this.backendurl}/ForumApp/notifications`)
    }
  }

  Connect() {
    return new Observable((observer) => {
      this.sse.onmessage = (event : MessageEvent) => {
        let eventdata = JSON.parse(event.data)
        this.messages.push(eventdata)
      }
      this.sse.onerror = (error: any) => {observer.error(error)}
    })
  }

  Disconnect() {
    if (this.sse) {
      this.sse.close()
    }
  }


}
