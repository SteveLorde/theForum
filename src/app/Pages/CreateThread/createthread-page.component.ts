import { Component } from '@angular/core';
import {PostInputComponent} from "../../Components/PostInput/post-input.component";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Thread} from "../../Data/Models/Thread";
import {Post} from "../../Data/Models/Post";
import {AuthenticationService} from "../../Services/Authentication/authentication.service";
import {DataService} from "../../Services/DataService/data.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-createthread-page',
  standalone: true,
  imports: [
    PostInputComponent,
    ReactiveFormsModule
  ],
  templateUrl: './createthread-page.component.html',
  styleUrl: './createthread-page.component.scss'
})
export class CreatethreadPageComponent {

  constructor(private authservice : AuthenticationService, private dataservice : DataService, private router : Router) {
  }

  newthreadform = new FormGroup({
    threadtitle : new FormControl('', Validators.required),
    postbody : new FormControl(null)
  })

  SubmitThread() {
    let newpost : Post = {body: this.newthreadform.controls.postbody.value, date: new Date().getTime().toString(), id: "", threadid: "", user: this.authservice.activeuser}
    let newthread : Thread = {date: new Date().getTime().toString(), id: "", numofposts: 1, posts: [newpost], title: this.newthreadform.controls.threadtitle.value, userowner: this.authservice.activeuser }
    this.dataservice.AddThread(newthread).subscribe( (res : string) => {
      this.router.navigate(['/thread', res])
    })
  }

}
