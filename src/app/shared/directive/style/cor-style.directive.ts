import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[corStyle]'
})
export class CorStyleDirective implements OnInit {

  @Input() cor: string = '#000'

  constructor(
    private el: ElementRef
  ) {

  }
  ngOnInit(): void {
    this.el.nativeElement.style.color = this.cor;
  }

}
