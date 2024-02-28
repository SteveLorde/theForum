import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {AuthenticationService} from "../../Services/Authentication/authentication.service";
import {RegisterRequest} from "../../Services/Authentication/DTO/RegisterRequest";
import {LoginRequest} from "../../Services/Authentication/DTO/LoginRequest";
import {User} from "../../Data/Models/User";
import {NgIf} from "@angular/common";
import Swal from "sweetalert2";

@Component({
  selector: 'app-authenticationlanding-page',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf
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
      let loginreq: LoginRequest = {username: this.loginform.controls.username.value, password: this.loginform.controls.password.value}
      this.authservice.Login(loginreq).subscribe(res => {
        if (res) {
          this.router.navigate(['/profile'])
        }
      })
    }
  }

   Register() {
     let registerreq: RegisterRequest = {} as RegisterRequest
     if (this.registerform.value.username && this.registerform.value.password && this.registerform.value.email !== undefined) {
       registerreq.username = this.registerform.controls.username.value
       registerreq.password = this.registerform.controls.password.value
       registerreq.email = this.registerform.controls.email.value
       this.authservice.Register(registerreq).subscribe(res => {
         if (res) {
           this.router.navigate(['/profile'])
         }
         else {
           Swal.fire("Error in Register Process")
         }
       })
     }
   }


}
