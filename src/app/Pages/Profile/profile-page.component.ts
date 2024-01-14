import {Component, OnInit} from '@angular/core';
import {FallbackimageDirective} from "../../ComponentsUtilities/Directives/fallbackimage.directive";
import {User} from "../../Data/Models/User";
import {ActivatedRoute, Router} from "@angular/router";
import {DatePipe} from "@angular/common";
import {Post} from "../../Data/Models/Post";
import {DataService} from "../../Services/DataService/data.service";

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [
    FallbackimageDirective,
    DatePipe
  ],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.scss'
})
export class ProfilePageComponent implements OnInit {

  userid : string = ""
  user : User = {numofposts: 0, numofthreads: 0, joineddate: "", id: "", profilepicfilename: "", username: "", posts: []}

  constructor(private route : ActivatedRoute, private router : Router, public dataservice : DataService) {

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe( params =>
    this.user.id = params.get('userid')
    )
  }

  GetUserPosts(userid : string) {
    this.dataservice.GetUserProfile(userid).subscribe( (res : User) => {
      this.user = res
    })
  }



}
