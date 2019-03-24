import { Component, Input, Output, EventEmitter } from '@angular/core';
import { picture } from '../picture';

@Component({
	selector: 'app-listpicture',
	templateUrl: './listpicture.component.html',
	styleUrls: ['./listpicture.component.css']
})
export class ListpictureComponent {
	selectedpicture = null;
	@Input() picture: picture = null; /* picture is of type picture */
	@Input() pictureID: number = null;
	@Output() pictureSelect = new EventEmitter<any>();

	constructor() {}

	/* method to truncate text for description */
	textTruncate(str: string, length: number, ending: string) {
		if (length == null) {
			length = 100;
		}
		if (ending == null) {
			ending = '...';
		}
		if (str.length > length) {
			return str.substring(0, length - ending.length) + ending;
		} else {
			return str;

		}
	}

}
