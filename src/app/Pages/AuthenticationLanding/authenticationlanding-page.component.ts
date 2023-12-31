import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
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

  constructor(private authservice : AuthenticationService, private router : Router, private fb : FormBuilder) {
  }

  loginform = new FormGroup({
    username: new FormControl<string>('', Validators.required),
    password: new FormControl<string>('', Validators.required),
  })

  registerform = this.fb.nonNullable.group({
    username: [""],
    password: [""],
    email: [""]
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

   Register() {
      let registerreq : RegisterRequest = {} as RegisterRequest
     if (this.registerform.value.username && this.registerform.value.password && this.registerform.value.email !== undefined) {
       registerreq.username = this.registerform.value.username
       registerreq.password = this.registerform.value.password
       registerreq.email = this.registerform.value.email
       let check = this.authservice.Register(registerreq)
       if (check) {
         this.router.navigate(['/profile'])
       }
     }
     else {
       //return pop up
     }
  }

}
