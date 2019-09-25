import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

// NOT WORKING IN BOOTSTRAP 4

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {

    // ONE WAY:

    // constructor(private elementRef: ElementRef, private renderer: Renderer2) {}
    //
    // @HostListener('click') onClick() {
    //   this.renderer.addClass(this.elementRef.nativeElement, 'show')
    // }

    // ANOTHER:

    @HostBinding('class.open') isOpen = false;

    @HostListener('document:click', ['$event']) onClick(event: Event) {
        const dropdownClicked = this.elementRef.nativeElement.contains(event.target);
        this.isOpen = dropdownClicked ? !this.isOpen : false;
    }

    constructor(private elementRef: ElementRef) {
    }
}
