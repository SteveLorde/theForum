import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";
import {Thread} from "../../Data/Models/Thread";
import {ActivatedRoute, Router} from "@angular/router";
import {DataService} from "../../Services/DataService/data.service";


@Component({
  selector: 'app-search-page',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.scss'
})
export class SearchPageComponent {

  searchedthreads : Thread[] = []
  searchname : string = " "
  postuserprofilepic : string = ""

  constructor(private router: Router,private route : ActivatedRoute, public dataservice : DataService) {

  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let searchedthreadname = params.get('threadname')
      if (searchedthreadname != null) {
        this.searchname = searchedthreadname
      }
    })
  }

  GetSearchedThreads(searchname : string) {
    this.dataservice.SearchThreads(searchname).subscribe( (res) => {
      this.searchedthreads = res
      }
    )
  }

  NavigateToThread(id : string) {
    this.router.navigate(['/thread', id])
  }

  OnImageError() {

  }


}
