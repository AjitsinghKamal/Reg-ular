/*
 *--------------------attribute directive to style element---------------------*
 */
import { Directive , 
        ElementRef , 
        HostListener,
         SimpleChange ,
         OnChanges ,
         Input } 
        from '@angular/core';

@Directive({ selector: '[myHighlight]' })



export class HighlightDirective implements OnChanges {
  @Input('myHighlight') highlight;

private el:HTMLElement;

    constructor(el: ElementRef) {
       this.el=el.nativeElement;
    }

ngOnChanges(changes:{[propName:string]:SimpleChange}){
    this.el.innerHTML=changes['highlight'].currentValue;
   //this.el.innerText=changes['lights'].currentValue;
    
}
//listen to host    
/*
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
  */
    
//class close
}