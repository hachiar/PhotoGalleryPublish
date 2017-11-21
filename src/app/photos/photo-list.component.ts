import { Component, OnInit } from '@angular/core';
import { IPhoto } from './photo';

@Component({
	selector: 'app-photos',
	templateUrl: './photo-list.component.html',
	styleUrls: ['./photo-list.component.css']
})

export class PhotoListComponent implements OnInit{
	pageTitle = "My Photos";
	thumbWidth:number = 150;
	thumbMarg:number = 1;
	photoType:string = "All";
	favoritePhotos:IPhoto[];
	photos:IPhoto[] = [
		{
			"id" :0,
			"name": "00",
			"url" : "https://image.freepik.com/free-vector/collection-of-cartoon-christmas-trees_23-2147717781.jpg",
			"rating" : 5,
			"favorite" : true
		},
		{
			"id" :0,
			"name": "00",
			"url" : "https://image.freepik.com/free-vector/collection-of-six-beautiful-animals-with-winter-clothes_23-2147716790.jpg",
			"rating" : 5,
			"favorite" : false
		}
	];
	
	constructor(){
		this.favoritePhotos = this.setFavorites();
	}
	
	setFavorites():IPhoto[]{
		return this.photos.filter((photo: IPhoto) => 
		photo.favorite == true);
	}
	
	
	ngOnInit():void{
		console.log("Hey we're in oninit!");
	}
}