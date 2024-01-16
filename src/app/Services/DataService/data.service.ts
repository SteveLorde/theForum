import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, Observer} from "rxjs";
import {Thread} from "../../Data/Models/Thread";
import {environment} from "../../../environments/environment";
import {Category} from "../../Data/Models/Category";
import {Post} from "../../Data/Models/Post";
import {User} from "../../Data/Models/User";
import {SubCategory} from "../../Data/Models/SubCategory";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  backendurl = environment.backendurl
  backendimageurl = environment.backendurl + '/Storage'


  constructor(private http : HttpClient) {

  }

  //users endpoints

  GetUserProfile(userid : string) {
    return this.http.get<User>(`${this.backendurl}/ForumApp/users/getuserprofile/${userid}`)
  }

  GetCategories(){
    return this.http.get<Category[]>(`${this.backendurl}/ForumApp/categories/getcategories`)
  }

  GetCategoryThreads(subcategoryid : string){
    return this.http.get<SubCategory>(`${this.backendurl}/ForumApp/threads/getsubcategorythreads/${subcategoryid}`)
  }

  GetThread(threadid : string) {
    return this.http.get<Thread>(`${this.backendurl}/ForumApp/threads/getthread/${threadid}`)
  }

  SearchThreads(searchname : string) {
    return this.http.get<Thread[]>(`${this.backendurl}/ForumApp/searchthreads/${searchname}`)
  }

  CreateThread(newthread : Thread) {
    return this.http.post<boolean>(`${this.backendurl}/ForumApp/createthread/`, newthread)
  }

  AddThread(thread : Thread) {
    //return the newly created thread id
    return this.http.post<string>(`${this.backendurl}/ForumApp/addthread`, thread )
  }

  AddPost(post : Post) {
    return this.http.post<boolean>(`${this.backendurl}/ForumApp/addpost`, post)
  }




}
