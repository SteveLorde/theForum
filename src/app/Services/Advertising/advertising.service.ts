import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AdvertisingService {

  adtoken : string = ""


  constructor(private http: HttpClient) { }


}
