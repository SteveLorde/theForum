import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {RegisterRequest} from "./DTO/RegisterRequest";
import {AuthResponse} from "./DTO/AuthResponse";
import {LoginRequest} from "./DTO/LoginRequest";
import {User} from "../../Data/Models/User";
import Swal from "sweetalert2";
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  backendurl = environment.backendurl

  activeuser : User

  constructor(private http: HttpClient) { }

  Login(loginrequest : LoginRequest) {
    return this.http.post<string>(`${this.backendurl}/ForumApp/authentication/login`, loginrequest).pipe(
      map( res => {
        let logincheck : boolean
        if (res != null && undefined && "") {localStorage.setItem('usertoken', res)}
        this.GetActiveUserInfo().subscribe(res => logincheck = res)
        return logincheck
      })
    )
  }

  Register(registereq : RegisterRequest) {
    //returns token
    return this.http.post<any>(`${this.backendurl}/ForumApp/authentication/register`, registereq).pipe(
      map( (res : boolean) => {
        let registercheck : boolean
        if (res) {
          let loginreq = {username: registereq.username, password: registereq.password}
          this.Login(loginreq).subscribe(res => {
            if (res) {registercheck = true} else {registercheck = false}
          })
        }
        return registercheck
      })
    )
  }

  GetActiveUserInfo() {
    //BY AUTO APPENDING THE USERTOKEN IN HTTP REQUEST HEADER
    return this.http.get<User>(`${this.backendurl}/ForumApp/authentication/authentication/getactiveuserinfo`).pipe(
      map( (res : User) => {
        if (res != null && undefined && "") {
          this.activeuser = res
          return true
        }
        else {return false}
      })
    )
  }

}
