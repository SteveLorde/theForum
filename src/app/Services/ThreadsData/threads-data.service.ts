import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, Observer} from "rxjs";
import {Thread} from "../../Data/Models/Thread";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ThreadsDataService {


  backendurl = environment.backendurl
  backendimageurl = environment.backendurl + '/Storage'

  constructor(private http : HttpClient) {

  }



  GetCategories(){
    let response = this.http.get(`${this.backendurl}/Forum/GetCategories`, {responseType: "json"})
    return response
  }

  GetCategoryThreads(subcategoryid : string){
    let response = this.http.get<Thread[]>(`${this.backendurl}/Forum/GetSubCategoryThreads/${subcategoryid}`)
    return response
  }

  GetThread(threadid : string) {
    let response = this.http.get<Thread>(`${this.backendurl}/Forum/GetThread/${threadid}`)
  }

  SearchThreads(searchname : string) {
    let response = this.http.get<Thread[]>(`${this.backendurl}/Forum/SearchThreads/${searchname}`)
    return response
  }



}
