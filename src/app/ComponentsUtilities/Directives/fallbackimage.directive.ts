import {Directive, HostListener} from '@angular/core';

@Directive({
  selector: '[appFallbackimage]',
  standalone: true
})
export class FallbackimageDirective {

  fallbackimgsrc = "/assets/nulluserpic.svg"

  constructor() { }

  @HostListener('error', ['$event'])
  HandleImageError(event : Event) {
    const imageelement : HTMLInputElement = event.target as HTMLInputElement
    imageelement.src = this.fallbackimgsrc
  }

}
