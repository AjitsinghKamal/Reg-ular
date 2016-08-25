import { Component,Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'match-detail',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent {

 //get result array
    @Input() matchLog:any;
//gets match count
    @Input() count:any;

   

   
 
}