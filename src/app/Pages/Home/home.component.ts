import {Component, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";
import {Category} from "../../Data/Models/Category";
import {DataService} from "../../Services/DataService/data.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  categories : Category[] = []

  constructor(private dataservice : DataService, private router : Router) {

  }

  ngOnInit() {
    this.GetCategories()
  }


  GetCategories() {
    this.dataservice.GetCategories().subscribe( (res : Category[]) =>
      this.categories = res
    )
  }

  NavigateToSubCategory(subcategoryid : string) {
    this.router.navigate(["/subcategory", subcategoryid])
}

}
