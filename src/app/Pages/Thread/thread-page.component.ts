import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Thread} from "../../Data/Models/Thread";
import {ThreadsDataService} from "../../Services/ThreadsData/threads-data.service";
import {NgForOf} from "@angular/common";
import {PostInputComponent} from "../../Components/Input/post-input.component";

@Component({
  selector: 'app-thread-page',
  standalone: true,
  imports: [
    NgForOf,
    PostInputComponent
  ],
  templateUrl: './thread-page.component.html',
  styleUrl: './thread-page.component.scss'
})
export class ThreadPageComponent implements OnInit {

  thread = {} as Thread


  constructor(private route : ActivatedRoute, private dataservice : ThreadsDataService) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let threadrouteid = params.get('id')
      if (threadrouteid != null) {
        this.thread.id = threadrouteid

      }
    })
  }

  GetThread(threadid : string) {
    let response = this.dataservice.GetThread(threadid)
  }

}
