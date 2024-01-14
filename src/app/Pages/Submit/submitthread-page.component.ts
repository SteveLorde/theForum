import {Component, OnInit} from '@angular/core';
import {PostInputComponent} from "../../Components/PostInput/post-input.component";
import {DataService} from "../../Services/DataService/data.service";
import {User} from "../../Data/Models/User";
import Swal from 'sweetalert2';
import {AuthenticationService} from "../../Services/Authentication/authentication.service";


@Component({
  selector: 'app-submitthread-page',
  standalone: true,
  imports: [
    PostInputComponent
  ],
  templateUrl: './submitthread-page.component.html',
  styleUrl: './submitthread-page.component.scss'
})
export class SubmitthreadPageComponent implements OnInit{

  activeuser : User = {} as User


  constructor(private backendservice : DataService, private authservice : AuthenticationService) {

  }

  ngOnInit() {
    this.GetUserInfo()
  }

  GetUserInfo() {
    if (!localStorage.getItem('usertoken')) {
      Swal.fire("User token not found")
    }
    else {
      let token = localStorage.getItem('usertoken')
      this.authservice.GetUserInfo(token).subscribe((res: User) => this.activeuser = res)
    }
  }

  CreateThread() {

  }

}
