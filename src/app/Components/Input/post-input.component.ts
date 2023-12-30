import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import '@github/markdown-toolbar-element'

@Component({
  selector: 'app-post-input',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [],
  templateUrl: './post-input.component.html',
  styleUrl: './post-input.component.scss'
})
export class PostInputComponent {

  constructor() {
  }

  ReturnPost() {

  }

}
