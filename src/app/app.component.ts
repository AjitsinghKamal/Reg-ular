/**
 *-----------------------------main component-------------------------------*
**/
import { Component ,
            Input ,
            ViewChild ,
        } from "@angular/core";
//attribute directive to change element style
import {HighlightDirective} from "./highlight.directive";
//structure directive to bind data with contenteditable div
import {EditorDirective} from "./editor.directive";
//child component to display result summary
import {ResultComponent} from "./result/result.component";



@Component({
  moduleId: module.id,
 
  selector: 'app-root',
 
  templateUrl : './app.component.html',
  styleUrls : ['./app.component.css'],
    
    
})

export class AppComponent{
    //get child directive's property
    //use 'editor' to reference it
    textArea:any="";                       
    //get regular-expression
    regex:string="";  
    //get expression to replace with
    replaceWith:string=''; 
    //to maintain two instances
    //of input string
    //for matching and substituting
    
    //property to trigger ngIf in template
    replace:boolean=false;               
    //displays result
    //source property to child component's
    //matchLog property
    result:any;
    //counts and display number of occcurences 
    //of reg-ex matched
    counter:any=0;
    //to highlight
    highlight:any="";



 @ViewChild(EditorDirective)
  private editor: EditorDirective;
//event binding function to element 'reg-input' & 'text-input'
onChange(newVal:any){
    
            this.regex=newVal;
    
    this.matchThis();
   
}
onChangeText(newVal:any){
    this.textArea=newVal;
    this.matchThis();
}
//whether to show or hide ngIf alternatives    
toggle(toShow){
    this.replace=(!toShow)?false:true;
}

//checks and validate input regular exp
pattern:any=()=>{
    
     let pat;
        try{
            if(!this.regex || this.regex===""){
                return undefined;
            }
            else{
                pat=new RegExp(this.regex,'gm');
                return pat;
            }
                        
        }catch(error){

            this.result=[];
            this.counter=0;
            
        }       
}
    
// execute the regex.exec() here to fetch matches
matchThis(){
    let m=this.pattern();
if(m!=undefined){
    let match;
//multi-d array
    let arr=[];
//execute exec over entire input text
    while((match=m.exec(this.textArea))!==null){
//helper array to feed more senible data to arr[]
        let subDetail=[];
        let start=m.lastIndex-match[0].length;
//check if loop is not infinetly stuck
        if(start!=m.lastIndex){
            subDetail.push(match[0]);
            subDetail.push(match[0].length);
            subDetail.push(start);
            subDetail.push(start+match[0].length);
//subDetai[]={match,length of match,starting index,end index of match}
            arr.push(subDetail);
        }
        else{
            
            this.counter="infinite";
            break;
        }
     }
    
//return outcome to instance properties
        if(this.counter!="infinte") { 
            this.result=arr;
            this.counter=arr.length;
//highlight match across input
        this.editor.highlight(m);
        
        
    }
  }
//close matchThis()
}

//replace with subtitute
substitute(val){
    
    let p=this.pattern();
    this.highlight=this.highlight.replace(p,val);
    
}
    
//end class   
}