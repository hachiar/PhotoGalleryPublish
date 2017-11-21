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
			"name": "Weihnachtsbaum",
			"url" : "https://image.freepik.com/free-vector/collection-of-cartoon-christmas-trees_23-2147717781.jpg",
			"rating" : 3.5,
			"favorite" : true
		},{
			"id" :1,
			"name": "Tiere tragen Pullis",
			"url" : "https://image.freepik.com/free-vector/collection-of-six-beautiful-animals-with-winter-clothes_23-2147716790.jpg",
			"rating" : 4,
			"favorite" : true
		},{
			"id" : 2,
			"name": "Adventskalender",
			"url" : "https://image.freepik.com/free-vector/cute-hand-drawn-advent-calendar-on-a-grey-background_23-2147715182.jpg",
			"rating" : 4.5,
			"favorite" : false
		},{
			"id" : 3,
			"name": "Schneemann",
			"url" : "https://image.freepik.com/free-vector/snowmen-background-in-vintage-style_23-2147714212.jpg",
			"rating" : 4.8,
			"favorite" : true
		},{
			"id" : 4,
			"name": "Lebkuchenmann",
			"url" : "https://image.freepik.com/free-vector/pack-of-nice-gingerbread-cookies_23-2147714300.jpg",
			"rating" : 3.2,
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