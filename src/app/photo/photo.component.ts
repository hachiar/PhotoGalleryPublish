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
	
	constructor(props:any){
		this.id = props.id;
		this.name = props.name;
		this.url = props.url;
		this.rating = props.rating;
		this.details = props.details;
		this.favorite = props.favorite;
	}
	
	ngOnInit():void{ }

	switchFavorite():void{	
		this.favorite = this.favorite ? false : true;
	}
}