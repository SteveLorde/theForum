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
import {FormControl, FormGroup, FormsModule} from "@angular/forms";
import {AddPost} from "../../Data/Models/AddPost";

@Component({
  selector: 'app-thread-page',
  standalone: true,
  imports: [
    NgForOf,
    PostInputComponent,
    RouterLink,
    FallbackimageDirective,
    FormsModule
  ],
  templateUrl: './thread-page.component.html',
  styleUrl: './thread-page.component.scss'
})
export class ThreadPageComponent implements OnInit {

  routethreadid : string = ""
  thread : Thread = {} as Thread
  imgurl = this.dataservice.backendimageurl


  constructor(private route : ActivatedRoute, public dataservice : DataService, private authservice : AuthenticationService) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.routethreadid = params.get('threadid')
    })
    this.GetThread(this.routethreadid)
    console.log(this.thread)
  }

  postform = new FormGroup( {
    postcontent: new FormControl(null)
  })

  GetThread(threadid : string) {
    this.dataservice.GetThread(threadid).subscribe( (res : Thread) =>
    this.thread = res
    )
  }

  SubmitPost() {
    //Check Login
    if (this.authservice.activeuser == null || undefined) {
      Swal.fire("Please Login To Post or Create Thread")
    }
    else {
      //get post body and create new post
      let newpost : AddPost = {body: this.postform.controls.postcontent.value, threadid: this.thread.id, userid: this.authservice.activeuser.id}
      console.log(newpost)
      this.dataservice.AddPost(newpost).subscribe( res => {
          if (res) {
            location.reload()
          }
          else {
            Swal.fire("Error posting")
          }
        }
      )
    }
  }

}
