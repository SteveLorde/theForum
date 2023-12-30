import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {AuthenticationService} from "../../Services/Authentication/authentication.service";
import {RegisterRequest} from "../../Services/Authentication/DTO/RegisterRequest";

@Component({
  selector: 'app-authenticationlanding-page',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './authenticationlanding-page.component.html',
  styleUrl: './authenticationlanding-page.component.scss'
})
export class AuthenticationlandingPageComponent {


  public Loginform : boolean = true
  public Registerform : boolean = false
  public status : string = "Register"

  constructor(private authservice : AuthenticationService, private router : Router) {
  }

  loginform = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  })

  registerform = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    email: new FormControl('')
  })

  SwitchForm() {
    if (this.status == "Register") {
      this.status = "Login"
      this.Loginform = false
      this.Registerform = true
    }
    else {
      this.status = "Register"
      this.Loginform = true
      this.Registerform = false
    }
  }

   Login() {
    /*
    let loginrequst = {
      username: this.loginform.get('username')?.value,
      password : this.loginform.get('password')?.value
    }
    if (loginrequst.username && loginrequst.password != null)
    {
        let check = await this.authservice.Login(loginrequst)
        if (check) {
            this.router.navigate(['/profile'])
        }
        else {

        }
    }

     */
  }

   LoginTest() {

  }

   Register() {
    let registerrequest : RegisterRequest
     {
       registerrequest.username = this.registerform.get('username')
       registerrequest.password = this.registerform.get('password')
       registerrequest.email = this.registerform.get('email')
     }

  }

}
