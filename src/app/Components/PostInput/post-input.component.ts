import {
  AfterViewInit,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  EventEmitter, Inject, inject,
  Input, OnInit,
  Output, PLATFORM_ID, Renderer2,
  ViewChild,
} from '@angular/core';

import {Post} from "../../Data/Models/Post";
import {User} from "../../Data/Models/User";
import {QuillEditorComponent, QuillViewComponent} from "ngx-quill";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-post-input',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [QuillEditorComponent, FormsModule, QuillViewComponent, ReactiveFormsModule],
  templateUrl: './post-input.component.html',
  styleUrl: './post-input.component.scss'
})
export class PostInputComponent implements OnInit {

  @Input() userposter : User = {} as User
  @Output() newpost = new EventEmitter<any>()

  constructor() {}

  inputform = new FormGroup({
      postcontent : new FormControl(null)
  })

  ngOnInit() {

  }

  ReturnNewPost() {
    let newpostbody = this.inputform.controls.postcontent.value
    this.newpost = newpostbody
  }

  ConfirmPosted() {
      this.inputform.controls.postcontent.reset()
  }



}
