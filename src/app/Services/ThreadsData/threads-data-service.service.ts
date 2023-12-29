import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, Observer} from "rxjs";
import {Thread} from "../../Data/Thread";

@Injectable({
  providedIn: 'root'
})
export class ThreadsDataServiceService {

  constructor(private http : HttpClient) { }

  GetCategoryThreads(){
    let response = this.http.get<Thread[]>("")
    return response
  }



}
