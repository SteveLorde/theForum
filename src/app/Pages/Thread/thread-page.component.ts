import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, RouterLink} from "@angular/router";
import {Thread} from "../../Data/Models/Thread";
import {DataService} from "../../Services/DataService/data.service";
import {NgForOf} from "@angular/common";
import {PostInputComponent} from "../../Components/PostInput/post-input.component";
import {User} from "../../Data/Models/User";
import Swal from "sweetalert2";
import {AuthenticationService} from "../../Services/Authentication/authentication.service";
import {FallbackimageDirective} from "../../ComponentsUtilities/Directives/fallbackimage.directive";
import {Post} from "../../Data/Models/Post";
import {dateTimestampProvider} from "rxjs/internal/scheduler/dateTimestampProvider";

@Component({
  selector: 'app-thread-page',
  standalone: true,
  imports: [
    NgForOf,
    PostInputComponent,
    RouterLink,
    FallbackimageDirective
  ],
  templateUrl: './thread-page.component.html',
  styleUrl: './thread-page.component.scss'
})
export class ThreadPageComponent implements OnInit {

  routethreadid : string = ""
  thread : Thread = {} as Thread
  imgurl = this.dataservice.backendimageurl
  postcontent : any

  @ViewChild(PostInputComponent) postinput : PostInputComponent


  constructor(private route : ActivatedRoute, private dataservice : DataService, private authservice : AuthenticationService) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.routethreadid = params.get('threadid')
    })
    this.GetThread(this.routethreadid)
    console.log(this.thread)
  }

  GetThread(threadid : string) {
    this.dataservice.GetThread(threadid).subscribe( (res : Thread) =>
    this.thread = res
    )
  }

  NewPost() {
    //get post body and create new post
    let newpost : Post = {id: "", body: this.postcontent, threadid: this.thread.id, date: new Date().getTime().toString(), user: this.authservice.activeuser}
    this.dataservice.AddPost(newpost).subscribe( res => {
        if (res) {
          this.postinput.ConfirmPosted()
        }
        else {
          Swal.fire("Error posting")
        }
      }
    )
  }

}
