import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";
import {Category} from "../../Data/Models/Category";
import {ThreadsDataService} from "../../Services/ThreadsData/threads-data.service";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  categories : Category[] = []

  constructor(private dataservice : ThreadsDataService) {

  }




  GetCategories() {
    let response = this.dataservice.GetCategories().subscribe()
  }

}
