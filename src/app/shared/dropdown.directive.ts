import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

    constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

    @HostListener('mouseenter') mouseenter(event: MouseEvent) {
      this.renderer.addClass(this.elementRef.nativeElement, 'open');
    }

    @HostListener('mouseleave') mouseleave(event: MouseEvent) {
      this.renderer.removeClass(this.elementRef.nativeElement, 'open');
    }

}
