import { Component, ViewChild, ElementRef, HostListener, OnInit } from '@angular/core';

import { picture } from './picture';
import { pictureService  } from './picture.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})



export class AppComponent implements OnInit {
	title = 'Galleria'; /* Title of site */
	selectedpictureId = null; /* selectedpictureId is an variable used to assign the passed pictureid*/
	pictureDetails: picture =  null; /* picture is an interface where all the types are declared */
	pictureslist: picture[] = null; /* pictureslist is a type of interface picture which refer to object of an array */
	stickypictureDetails = null; /* used for the reference to add class sticky details in app.component.html */
	@ViewChild('mainpictureListing') pictureListingElement: ElementRef; /* MainpictureListing is the Element refernce used in app.component.html   */
	constructor(private addFetchpicture: pictureService) {} /* pictureservice is a service which is stored in addFetchpicture */

	ngOnInit() {
		this.fetchpicture();
	}

	async fetchpicture() {
		try {
			this.pictureslist = await this.addFetchpicture.getpicture('Galleria');
			this.updatepictureList();
		} catch (error) {
			console.log(error);
		}
	}

	updatepictureList() {

		/* subscribe method is used to recognize and update when the new pictures are added */
		this.addFetchpicture.pictureAdded.subscribe((result: picture[]) => {
			this.pictureslist = result;
		});

	}

	showDetails(pictureID: number) {
		this.selectedpictureId = pictureID;
		/* pictureDetails here will have the pictureslist with the passes pictureId */
		this.pictureDetails = this.pictureslist[pictureID];
	}

	closeDetails() {
		this.selectedpictureId = null; /* Make the SelectedpictureId to null */
		this.pictureDetails =  null; /* Remove the content in the pictureDetails */
	}

	@HostListener('window:scroll', []) /* HostListener is used for binding with CSS events */
	onWindowScroll() { /* Its an event called when the window is scrolled */
		const element = this.pictureListingElement.nativeElement; /* el here refers to the mainpictureListing */
		if (this.pictureListingElement.nativeElement !== undefined) {
			const viewportOffset = element.getBoundingClientRect(); /* viewportOffset will have all the four corner values */
			const top = viewportOffset.top; /* get the top value */
			if (top < 0) {
				this.stickypictureDetails = true;
			} else {
				this.stickypictureDetails = false;
			}
		}
	}
}

