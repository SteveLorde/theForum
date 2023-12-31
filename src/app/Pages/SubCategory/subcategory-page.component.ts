import { Component } from '@angular/core';
import {Thread} from "../../Data/Models/Thread";
import {NgForOf} from "@angular/common";
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-subcategory-page',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './subcategory-page.component.html',
  styleUrl: './subcategory-page.component.scss'
})
export class SubcategoryPageComponent {

  threads : Thread[] = []

  constructor(private router : Router) {
  }

  async GetThreads() {

  }

  NavigateToThread(id : string) {
    this.router.navigate(['/thread', id])
  }

}
