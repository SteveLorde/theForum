import { Component } from '@angular/core';
import {PostInputComponent} from "../../Components/PostInput/post-input.component";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {Thread} from "../../Data/Models/Thread";
import {Post} from "../../Data/Models/Post";
import {AuthenticationService} from "../../Services/Authentication/authentication.service";
import {DataService} from "../../Services/DataService/data.service";
import {ActivatedRoute, Router} from "@angular/router";
import {QuillEditorComponent} from "ngx-quill";
import {Location} from '@angular/common'
import Swal from "sweetalert2";
@Component({
  selector: 'app-createthread-page',
  standalone: true,
  imports: [
    PostInputComponent,
    ReactiveFormsModule,
    QuillEditorComponent,
    FormsModule
  ],
  templateUrl: './createthread-page.component.html',
  styleUrl: './createthread-page.component.scss'
})
export class CreatethreadPageComponent {

  CurrentPage: Location
  subcatid : string
  postbody : any

  constructor(private authservice : AuthenticationService, private dataservice : DataService, private router : Router, private route : ActivatedRoute) {
    this.route.paramMap.subscribe( params =>
      this.subcatid = params.get('subcatid')
    )
  }

  newthreadform = new FormGroup({
    threadtitle : new FormControl('', Validators.required),
    postcontent: new FormControl(null)
  })

  SubmitThread() {
    //check login
    if (this.authservice.activeuser == null || undefined) {
      Swal.fire("Please Login to Create Thread")
    }
    else {
      let newpost : Post = {body: this.newthreadform.controls.postcontent, date: new Date().getTime().toString(), id: "", threadid: "", ordernum: 1 ,userposter: this.authservice.activeuser}
      let newthread : Thread = {subcategoryid: this.subcatid,date: new Date().getTime().toString(), id: "", numofposts: 1, posts: [newpost], title: this.newthreadform.controls.threadtitle.value, userowner: this.authservice.activeuser }
      this.dataservice.AddThread(newthread).subscribe( (threadid : string) => {
        this.router.navigate(['/thread', threadid])
      })
    }
  }

  ReturnToSubCategory() {
    this.CurrentPage.back()
  }

}
