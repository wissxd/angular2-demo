import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
    selector: '[highlight]'
})
export class HighlightDirective {
    constructor(el: ElementRef, render: Renderer) {
        render.setElementStyle(el.nativeElement, 'backgroundColor', 'yellow');
    }
}
