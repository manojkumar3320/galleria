import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { picture } from './picture';

@Injectable({
	providedIn: 'root'
})
export class pictureService {
	picturesList: picture[] = [];

	/* Used to communicate between the components */
	pictureAdded = new Subject();

	/**
	 * Description: Method to store data in local storage.
	 * @param key any
	 * @param value any
	 * Return Value: Promise<boolean>
	 */
	setpicture({
		key,
		value
	}: {
		key: string,
		value: any
	}) {
		return new Promise((resolve, reject) => {
			try {
				localStorage.setItem(key, JSON.stringify(value));
				resolve(true);
			} catch (error) {
				reject(error);
			}
		});
	}

	/**
	 * Description: Method to fetch data from local storage.
	 * @param key any
	 * Return Value: Promise<picture[]>
	 */
	getpicture(key: any): Promise<picture[]> {
		return new Promise((resolve, reject) => {
			try {
				const value = localStorage.getItem(key);
   (typeof value === 'string' || value === null) ? resolve(JSON.parse(value === null ? '[]' : value)) : reject(false);
			} catch (error) {
				reject(error);
			}
		});
	}

	/**
	 * Description: Method to add picture data in local storage.
	 * @param picturepicture picture
	 * Return Value: Promise<picture[]>
	 */
	async add(picturephoto: picture) {
		this.picturesList = await this.getpicture('Galleria');

		/* Add the picturepicture to picturesList */
		this.picturesList.push(picturephoto);
		const isAdded = await this.setpicture({
			key: 'Galleria',
			value: this.picturesList
		});

		/* used to send the message to other components */
		this.pictureAdded.next(this.picturesList);
	}

}

