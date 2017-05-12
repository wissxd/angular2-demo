import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';
import { LoggerService } from './logger.service';
import { ChildComponent } from './child.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [AppComponent, HighlightDirective, ChildComponent],
    providers: [LoggerService],
    bootstrap: [AppComponent]
})
export class AppModule { }
