import { Directive, ElementRef, Renderer2, HostListener, Input, HostBinding } from '@angular/core'

@Directive({
    selector: '[appStyle]'
})

export class StyleDirective {

    @Input('appStyle') color: string = 'blue'
    @Input() fontStyle = 'normal'
    @HostBinding('style.fontStyle') elFontStyle = null;
    constructor(private el: ElementRef, private r: Renderer2) {
    }
    @HostListener('click', ['$event.target'] ) onClick(event: Event) {
        console.log(event)
    }
    @HostListener('mouseenter') onEnter() {
        this.elFontStyle = this.fontStyle;
        this.r.setStyle(this.el.nativeElement, 'color', this.color);
    }
    @HostListener('mouseleave') onLeave() {
        this.elFontStyle = null;
        this.r.setStyle(this.el.nativeElement, 'color', null);
    }   
}