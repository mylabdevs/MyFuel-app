import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[fontStyle]'
})
export class FontStyleDirective {

  constructor(
    el: ElementRef
  ) {
    el.nativeElement.style.fontWeight = 'bold';
  }

}
