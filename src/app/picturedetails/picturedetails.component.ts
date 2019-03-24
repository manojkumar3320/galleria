import { Component, Input, Output, EventEmitter } from '@angular/core';
import { picture } from '../picture';

@Component({
	selector: 'app-picturedetails',
	templateUrl: './picturedetails.component.html',
	styleUrls: ['./picturedetails.component.css']
})
export class picturedetailsComponent {

	@Input() pictureId: number = null;
	@Input() pictureDetails: picture = null; /* picture Details is of type picture */
	@Output() closePanel = new EventEmitter<boolean>();

	constructor() { }

	closeDetails() {
		this.closePanel.emit(true);
	}

}
