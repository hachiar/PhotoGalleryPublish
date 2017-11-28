import { Component, OnInit } from '@angular/core';
import { IPhoto } from './../shared/photo';

@Component({
	selector: 'app-photo',
	templateUrl: './photo.component.html',
	styleUrls: ['./photo.component.css']
})

export class PhotoComponent implements OnInit, IPhoto {
	id: number;
	name: string;
	url: string;
	rating: number;
	details: string;
	favorite: boolean;
	
	ngOnInit():void{ }

	switchFavorite():void{	}
}