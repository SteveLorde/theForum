import {Component, OnInit} from '@angular/core';
import {Thread} from "../../Data/Models/Thread";
import {DatePipe, NgForOf} from "@angular/common";
import {ActivatedRoute, Route, Router} from "@angular/router";
import {FallbackimageDirective} from "../../ComponentsUtilities/Directives/fallbackimage.directive";
import {DataService} from "../../Services/DataService/data.service";
import Swal from "sweetalert2";
import {SubCategory} from "../../Data/Models/SubCategory";
import {AuthenticationService} from "../../Services/Authentication/authentication.service";

@Component({
  selector: 'app-subcategory-page',
  standalone: true,
  imports: [
    NgForOf,
    FallbackimageDirective,
    DatePipe
  ],
  templateUrl: './subcategory-page.component.html',
  styleUrl: './subcategory-page.component.scss'
})
export class SubcategoryPageComponent implements OnInit{

  subcategoryid : string = ""
  threads : Thread[] = []
  imgurl : string = this.dataservice.backendimageurl

  constructor(private router : Router, private route : ActivatedRoute ,private dataservice : DataService, private authservice : AuthenticationService) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe( params =>
    this.subcategoryid = params.get("subcategoryid")
    )
    this.GetThreads(this.subcategoryid)
  }


  GetThreads(subcategoryid : string) {
    this.dataservice.GetCategoryThreads(subcategoryid).subscribe( (res : SubCategory) => {
        this.threads = res.threads
      }
    )
  }

  NavigateToThread(threadid : string) {
    this.router.navigate(['/thread', threadid])
  }

  CreateThread() {
    //check login
    if (this.authservice.activeuser == null || undefined) {
      Swal.fire("Please Login To Create Thread")
    }
    else {
      this.router.navigate(["/createthread"])
    }
  }

}
