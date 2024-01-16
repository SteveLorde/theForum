import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {AuthenticationService} from "../../Services/Authentication/authentication.service";
import {RegisterRequest} from "../../Services/Authentication/DTO/RegisterRequest";
import {LoginRequest} from "../../Services/Authentication/DTO/LoginRequest";
import {User} from "../../Data/Models/User";

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
    username: ["", Validators.required],
    password: ["", Validators.required],
    email: ["", Validators.required]
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
    if (this.loginform.value.username && this.loginform.value.password != null) {
      let loginreq: LoginRequest = {username: this.loginform.controls.username.value, password: this.loginform.controls.password.value }
      this.authservice.Login(loginreq).subscribe((token: string) => localStorage.setItem("usertoken", token))
      if (localStorage.getItem('usertoken')) {
        this.authservice.GetUserInfo(localStorage.getItem('usertoken')).subscribe( (res : User) => {
          let userid = res.id
          this.router.navigate(['/profile', userid])
        })
      }
    }
  }

   Register() {
    let registerreq : RegisterRequest = {} as RegisterRequest
     if (this.registerform.value.username && this.registerform.value.password && this.registerform.value.email !== undefined) {
       registerreq.username = this.registerform.controls.username.value
       registerreq.password = this.registerform.controls.password.value
       registerreq.email = this.registerform.controls.email.value
       this.authservice.Register(registerreq).subscribe( (token) => {
         if (token) {
           localStorage.setItem('usertoken', token)
           this.authservice.GetUserInfo(localStorage.getItem('usertoken')).subscribe( (res : User) => this.router.navigate(['profile', res.id]))
         }}
       )}
  }

}
