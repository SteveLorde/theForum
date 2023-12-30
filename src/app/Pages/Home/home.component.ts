import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";
import {Category} from "../../Data/Models/Category";
import {ThreadsDataServiceService} from "../../Services/ThreadsData/threads-data-service.service";

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

  constructor(private dataservice : ThreadsDataServiceService) {

  }




  async GetCategories() {
    let response = this.dataservice.GetCategories()
  }

}
