/*
 *--------------------attribute directive to style element---------------------*
 */
import { Directive , 
        ElementRef , 
        HostListener } 
        from '@angular/core';

@Directive({ selector: '[myHighlight]' })

export class HighlightDirective {

private el:HTMLElement;

    constructor(el: ElementRef) {
       this.el=el.nativeElement;
    }
//listen to host    
 @HostListener('mouseenter') onMouseEnter() {
    this.highlight("#2a2d34");
  }
    
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }
    
//change color
  private highlight(color: string) {
    this.el.style.borderColor = color;
  }
    
//class close
}