import { Component } from '@angular/core';
import {Thread} from "../../Data/Models/Thread";

@Component({
  selector: 'app-subcategory-page',
  standalone: true,
  imports: [],
  templateUrl: './subcategory-page.component.html',
  styleUrl: './subcategory-page.component.scss'
})
export class SubcategoryPageComponent {

  subcategorythreads : Thread[] = []

  constructor() {
  }

  async GetThreads() {

  }

}
