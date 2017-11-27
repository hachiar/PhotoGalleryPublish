import { Component, OnInit } from '@angular/core';
import { IPhoto } from './photo';

@Component({
	selector: 'app-photo',
	templateUrl: './photo.component.html',
	styleUrls: ['./photo.component.css']
})

export class PhotoComponent implements OnInit, IPhoto {
	id: 0;
	name: "Name";
	url: "url";
	rating: 5;
	details: "Details";
	favorite: true;
	
	ngOnInit():void{
		console.log("Hey we're in oninit!");
	}
}