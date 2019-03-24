import { Component, ViewChild } from '@angular/core';
import { pictureService } from '../picture.service';
import { NgForm, FormGroup } from '@angular/forms';

@Component({
	selector: 'app-addpicture',
	templateUrl: './addpicture.component.html',
	styleUrls: ['./addpicture.component.css'],
})

export class AddpictureComponent {

	categoriesList = [
		{name: 'natural'},
		{name: 'artificial'},
		{name: 'paper art'},
		{name: 'artistic'}
	];  /* Array of caterogieslist with key value pair */

	/* Using the localrefernce variable addForm used in the form */
	@ViewChild ('addForm') addProductForm: NgForm;

	constructor(private addFetchpicture: pictureService) { }

	formSubmit() {
		if (this.addProductForm.valid) {
			const product = this.addProductForm.value; /* Fetch all the values submitted in the form and stored in product */
			console.log(product);
			this.addFetchpicture.add(product); /* pass the product as parameter to add method which is declared in picture.service.ts */
		}
	}

}

