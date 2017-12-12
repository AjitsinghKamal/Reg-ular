import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

//attribute directive to change element style
import { HighlightDirective } from "./highlight.directive";
//structure directive to bind data with contenteditable div
import { EditorDirective } from "./editor.directive";
//child component to display result summary
import { ResultComponent } from "./result/result.component";


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
	AppComponent,
	HighlightDirective,
	EditorDirective,
	ResultComponent
  ],
  imports: [
	BrowserModule,
	FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
