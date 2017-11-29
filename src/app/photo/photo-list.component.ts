import { Component, OnInit } from '@angular/core';
import { IPhoto } from './../shared/photo';
import { PhotoComponent } from './../photo/photo.component';

import { PhotoService } from '../photo/photo.service';

@Component({
	//selector: 'app-photos',
	templateUrl: './photo-list.component.html',
	styleUrls: ['./photo-list.component.css']
})

export class PhotoListComponent implements OnInit{
	pageTitle = "My Photos";
	thumbWidth:number = 150;
	thumbMarg:number = 1;
	photoType:string = "All";
	favoritePhotos:PhotoComponent[];
	photos:PhotoComponent[];

	/**
	* @constructor
	*/
	constructor(private _photoService: PhotoService){}
	
	updateRating(rate:number): void{
		console.log("Wir haben die Wertung " + rate + " erhalten.");
	}//end function: updateRating
	
	updateFav(fav:boolean, photo:PhotoComponent): void{
		console.log("Dieses Bild ist dein Lieblingsbild: " + fav.toString());
		photo.switchFavorite();
		this.favoritePhotos = this.setFavorites();
	}//end function: updateFav
	
	ngOnInit():void{
		console.log("On Init - PhotoListComponent");
		this.photos = this._photoService.getPhotos();
		this.favoritePhotos = this.setFavorites();
	}//end function: ngOnInit
	
	setFavorites():PhotoComponent[]{
		return this.photos.filter((photo: PhotoComponent) => 
		photo.favorite == true);
	}//end function: setFavorites
	
	
	
	
}

