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

@Directive({ 
    selector:'[inputText]',
        
})

export class EditorDirective implements OnChanges {
//notify property change to parent
    @Output() update=new EventEmitter();
//bind target of 'highlight' property of parent
    @Input('inputText') highlight:any;
    
private el:HTMLElement;
    
textArea:any="";

constructor(elRef:ElementRef) {
    this.el = elRef.nativeElement;
}
//highlight regex matches whenever expression changes    
ngOnChanges(changes:{[propName:string]:SimpleChange}){
    this.el.innerHTML=changes['highlight'].currentValue;
    
}

//this updates input text
//on each blur
@HostListener('blur') onBlur(){
    var newText=this.el.innerText;
    this.sendMessage(newText);
}


//emit message to parent
sendMessage(value){
    if(value!=this.textArea){
        this.textArea=value;
        this.update.emit(true);
    
    }
}
//close class    
}