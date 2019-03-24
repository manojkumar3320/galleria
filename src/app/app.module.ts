import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AddpictureComponent } from './addpicture/addpicture.component';
import { picturedetailsComponent } from './picturedetails/picturedetails.component';
import { ListpictureComponent } from './listpictures/listpicture.component';

import { ScrollSmoothDirective } from './scroll-smooth.directive';

import { pictureService } from './picture.service';

@NgModule({

	declarations: [
		AppComponent,
		ListpictureComponent,
		AddpictureComponent,
		picturedetailsComponent,
		ScrollSmoothDirective
	],
	imports: [
		BrowserModule,
		FormsModule
	],
	providers: [AddpictureComponent, pictureService],
	bootstrap: [AppComponent]

})

export class AppModule { }
