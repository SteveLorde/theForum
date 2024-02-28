import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {RegisterRequest} from "./DTO/RegisterRequest";
import {AuthResponse} from "./DTO/AuthResponse";
import {LoginRequest} from "./DTO/LoginRequest";
import {User} from "../../Data/Models/User";
import Swal from "sweetalert2";
import {BehaviorSubject, map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  backendurl = environment.backendurl
  activeuser : User = {} as User
  authStatusSubject = new BehaviorSubject<string>("Login / Register")
  authStatusObservable = this.authStatusSubject.asObservable()

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
    return this.http.post<boolean>(`${this.backendurl}/ForumApp/authentication/register`, registereq).pipe(
      map( (rescheck : boolean) => {
        if (rescheck) {
          let loginreq : LoginRequest = {username: registereq.username, password: registereq.password}
          let checklogin : boolean = false
          this.Login(loginreq).subscribe(res => checklogin = res)
          return checklogin
        }
        else {
          return false
        }
        })
    )
  }

  GetActiveUserInfo() {
    //BY AUTO APPENDING THE USERTOKEN IN HTTP REQUEST HEADER
    return this.http.get<User>(`${this.backendurl}/ForumApp/authentication/getactiveuserinfo`).pipe(
      map ( (res: User) => {
        this.activeuser = res
        this.authStatusSubject.next(this.activeuser.username)
        console.log("authstatus: " + this.authStatusSubject.value)
        return this.activeuser.id !== null && this.activeuser.id !== "undefined";
      })
    )
  }

  LoginStatus() {

  }

  Logout() {
    localStorage.removeItem("usertoken")
    this.activeuser = {} as User
    this.authStatusSubject.next("Login / Register")
  }

}
