import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {RegisterRequest} from "./DTO/RegisterRequest";
import {AuthResponse} from "./DTO/AuthResponse";
import {LoginRequest} from "./DTO/LoginRequest";
import {User} from "../../Data/Models/User";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  backendurl = environment.backendurl
  activeuser : User

  constructor(private http: HttpClient) { }

  Login(loginrequest : LoginRequest) {
    return this.http.post<string>(`${this.backendurl}/Forum/Authentication/Login`, loginrequest)
  }

  Register(registereq : RegisterRequest) {
    //returns token
    return this.http.post<string>(`${this.backendurl}/Forum/Authentication/Register`, registereq)
  }

  GetUserInfo(token : string) {
    return this.http.get<User>(`${this.backendurl}/Forum/Authentication/GetUserInfo/${token}`)
  }

}
