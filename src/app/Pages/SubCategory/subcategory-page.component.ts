import {Component, OnInit} from '@angular/core';
import {Thread} from "../../Data/Models/Thread";
import {DatePipe, NgForOf} from "@angular/common";
import {ActivatedRoute, Route, Router} from "@angular/router";
import {FallbackimageDirective} from "../../ComponentsUtilities/Directives/fallbackimage.directive";
import {DataService} from "../../Services/DataService/data.service";
import Swal from "sweetalert2";

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

  constructor(private router : Router, private route : ActivatedRoute ,private dataservice : DataService) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe( params =>
    this.subcategoryid = params.get("subcategoryid")
    )
    this.GetThreads(this.subcategoryid)
  }


  GetThreads(subcategoryid : string) {
    this.dataservice.GetCategoryThreads(subcategoryid).subscribe( (res : Thread[]) => {
        this.threads = res
      }
    )
  }

  NavigateToThread(threadid : string) {
    this.router.navigate(['/thread', threadid])
  }

  CreateThread() {
    let checkuser = localStorage.getItem('usertoken')
    if (!checkuser) {
      Swal.fire("Please Login to Create a Thread")
    }
    else {
      this.router.navigate(["/createthread"])
    }
  }

}
