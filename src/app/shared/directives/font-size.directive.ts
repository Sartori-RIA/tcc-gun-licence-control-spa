import {Attribute, Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[fontSize]'
})
export class FontSizeDirective {

  constructor(@Attribute('fontSize') public fontSize: string, private el: ElementRef) {
  }

  ngOnInit() {
    this.el.nativeElement.fontSize = this.fontSize;
  }

}
