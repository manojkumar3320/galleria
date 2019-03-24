import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
	selector: '[appScrollSmooth]'
})

export class ScrollSmoothDirective {

	@Input() pictureListingElement: ElementRef;

	@HostListener('click', ['$event'])
	public onClick(event: MouseEvent) {
		this.pictureListingElement.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
	}

}
