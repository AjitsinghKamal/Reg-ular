/*
 *--------------structure directive to bind contenteditable div ---------------------*
 */
import { Directive ,
        ElementRef ,
        Renderer ,
        SimpleChange ,
        HostListener ,
        OnChanges ,
        Output ,
        EventEmitter ,
        Input } from '@angular/core';

declare var Mark:any;

@Directive({ 
    selector:'[inputText]',
        
})

export class EditorDirective implements OnChanges {
//notify property change to parent
    @Output() update=new EventEmitter();
//bind target of 'highlight' property of parent
    @Input('inputText') text:any;
    @Input() lights:any;
    
private el:HTMLElement;
    
 textArea:any="";
 markInstance:any;

constructor(elRef:ElementRef) {
    this.el = elRef.nativeElement;
    this.markInstance=new Mark(this.el);
}
//highlight regex matches whenever expression changes    
ngOnChanges(changes:{[propName:string]:SimpleChange}){
    this.el.innerText=changes['text'].currentValue;
    this.textArea=this.el.innerHTML;
    
}

highlight(reg){
    this.markInstance.unmark();
    this.markInstance.markRegExp(reg);
}


//TODO sanitise contenteditable input
//this updates input text
//on each blur
/*
@HostListener('blur') onBlur(){
    var newText=this.el.innerHTML;
    this.sendMessage(newText);
}


//emit message to parent
sendMessage(value){
    if(value!=this.textArea){
        this.textArea=value;
        this.update.emit(true);
    
    }
}
*/
//close class    
}