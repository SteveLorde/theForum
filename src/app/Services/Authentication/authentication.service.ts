import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
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
  activeuser : User = {} as User

  constructor(private http: HttpClient) { }

  Login(loginrequest : LoginRequest) {
    return this.http.post<string>(`${this.backendurl}/ForumApp/authentication/login`, loginrequest).pipe(
      map ( responsetoken => {
        localStorage.setItem("usertoken", responsetoken)
        return true
      })
    )
  }

  Register(registereq : RegisterRequest) {
    //returns token
    return this.http.post<any>(`${this.backendurl}/ForumApp/authentication/register`, registereq)
  }

  GetActiveUserInfo() {
    //BY AUTO APPENDING THE USERTOKEN IN HTTP REQUEST HEADER
    return this.http.get<User>(`${this.backendurl}/ForumApp/authentication/getactiveuserinfo`).pipe(
      map ( (res: User) => {
        this.activeuser = res
        if (this.activeuser.id !== null && this.activeuser.id !== "undefined") {
          return true
        }
        else {
          return false
        }
      })
    )
  }

  Logout() {
    localStorage.removeItem("usertoken")
    this.activeuser = {} as User
  }

}
