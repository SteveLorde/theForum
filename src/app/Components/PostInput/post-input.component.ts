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
import {AuthenticationService} from "../../Services/Authentication/authentication.service";

@Component({
  selector: 'app-post-input',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [QuillEditorComponent, FormsModule, QuillViewComponent, ReactiveFormsModule],
  templateUrl: './post-input.component.html',
  styleUrl: './post-input.component.scss'
})
export class PostInputComponent {

  @Input() form : FormGroup

  constructor(private authservice : AuthenticationService) {
    this.form = new FormGroup({
      postcontent : new FormControl(null)
    })
  }

  /*
  ReturnNewPost() {
    let newpost : Post = {body: this.form.controls.postcontent, date: new Date().getTime().toString(), id: "", threadid: "", userposter: this.authservice.activeuser}
    this.form.controls.postcontent.reset()
    return newpost
  }

   */

}
