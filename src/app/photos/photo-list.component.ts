import { Component, OnInit } from '@angular/core';
import { IPhoto } from './../shared/photo';
import { PhotoComponent } from './../photo/photo.component';

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
	favoritePhotos:PhotoComponent[];
	photos:PhotoComponent[] = [
		{
			"id" :0,
			"name": "Weihnachtsbaum",
			"url" : "https://image.freepik.com/free-vector/collection-of-cartoon-christmas-trees_23-2147717781.jpg",
			"rating" : 3.5,
			"details" : "",
			"favorite" : true,
			ngOnInit():void{
				console.log("On Init - photo-list - PhotoComponent - 0");
			}
		},{
			"id" :1,
			"name": "Tiere tragen einen Pulli",
			"url" : "https://image.freepik.com/free-vector/collection-of-six-beautiful-animals-with-winter-clothes_23-2147716790.jpg",
			"rating" : 4,
			"details" : "",
			"favorite" : true,
			ngOnInit():void{
				console.log("On Init - photo-list - PhotoComponent - 1");
			}
		},{
			"id" : 2,
			"name": "Adventskalender",
			"url" : "https://image.freepik.com/free-vector/cute-hand-drawn-advent-calendar-on-a-grey-background_23-2147715182.jpg",
			"rating" : 4.5,
			"details" : "",
			"favorite" : false,
			ngOnInit():void{
				console.log("On Init - photo-list - PhotoComponent - 2");
			}
		},{
			"id" : 3,
			"name": "Schneemann",
			"url" : "https://image.freepik.com/free-vector/snowmen-background-in-vintage-style_23-2147714212.jpg",
			"rating" : 4.8,
			"details" : "",
			"favorite" : true,
			ngOnInit():void{
				console.log("On Init - photo-list - PhotoComponent - 3");
			}
		},{
			"id" : 4,
			"name": "Lebkuchenmann",
			"url" : "https://image.freepik.com/free-vector/pack-of-nice-gingerbread-cookies_23-2147714300.jpg",
			"rating" : 3.2,
			"details" : "",
			"favorite" : false,
			ngOnInit():void{
				console.log("On Init - photo-list - PhotoComponent - 4");
			}
		},{
			"id" : 5,
			"name": "Lebkuchenhaus",
			"url" : "https://image.freepik.com/free-vector/collection-of-decorated-gingerbread-houses_23-2147719679.jpg",
			"rating" : 3.2,
			"details" : "",
			"favorite" : false,
			ngOnInit():void{
				console.log("On Init - photo-list - PhotoComponent - 5");
			}
		},{
			"id" : 6,
			"name": "Vogel",
			"url" : "https://image.freepik.com/free-vector/cute-birds-with-winter-clothes_23-2147584063.jpg",
			"rating" : 3.8,
			"details" : "",
			"favorite" : false,
			ngOnInit():void{
				console.log("On Init - photo-list - PhotoComponent - 6");
			}
		},{
			"id" : 7,
			"name": "Tiere",
			"url" : "https://image.freepik.com/free-vector/set-of-birds-and-nice-forest-animals-wearing-winter-clothes_23-2147580403.jpg",
			"rating" : 3.8,
			"details" : "",
			"favorite" : false,
			ngOnInit():void{
				console.log("On Init - photo-list - PhotoComponent - 7");
			}
		}
	];
	
	constructor(){
		this.favoritePhotos = this.setFavorites();
	}
	
	updateRating(rate:number): void{
		console.log("Wir haben die Wertung " + rate + " erhalten.");
	}
	
	updateFav(fav:boolean): void{
		console.log("Dieses Bild ist dein Lieblingsbild: " + fav.toString());
	}
	
	setFavorites():PhotoComponent[]{
		return this.photos.filter((photo: PhotoComponent) => 
		photo.favorite == true);
	}
	
	ngOnInit():void{
		console.log("Hey we're in oninit!");
	}
}

