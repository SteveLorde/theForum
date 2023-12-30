import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {RegisterRequest} from "./DTO/RegisterRequest";
import {AuthResponse} from "./DTO/AuthResponse";
import {LoginRequest} from "./DTO/LoginRequest";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  backendurl = environment.backendurl

  constructor(private http: HttpClient) { }

  Login(loginrequest : LoginRequest) {
    let response = this.http.post<AuthResponse>(`${this.backendurl}/Forum/Authentication/LoginTest`, loginrequest)
    return response
  }

  Register(registereq : RegisterRequest) {
    let response = this.http.post(`${this.backendurl}/Forum/Authentication/Register`, registereq)
    return response
  }

  GetUserInfo(token : string) {
    let response = this.http.get(`${this.backendurl}/Forum/Authentication/GetUserInfo/${token}`)
    return response
  }

}
