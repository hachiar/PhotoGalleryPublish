import { Component, OnInit } from '@angular/core';
import { Photo } from './photo';
import { PhotoService } from './photo.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-photo-view',
	templateUrl: './photo-view.component.html',
	styleUrls: ['./photo-view.component.css']
})

export class PhotoViewComponent implements OnInit {
	photo:Photo;
	
	constructor(private _route: ActivatedRoute,
				private _photoService: PhotoService,
				private _router: Router){
		console.log(this._route.snapshot.paramMap.get('id'));
	}

	ngOnInit():void{
		console.log("On Init - photo-view component");
		let id = +this._route.snapshot.paramMap.get('id');
		this.photo = this._photoService.getPhoto(id);
		
	}
	
	onBack():void{
		console.log("hey");
		this._router.navigate(['/gallery']);
	}
	/*
	updateFav(fav:boolean, photo:Photo): void{
		console.log("Dieses Bild ist dein Lieblingsbild: " + fav.toString());
		//photo.switchFavorite();
		console.log(photo);
		this._photoService.updateFavorites(photo, fav);
		this.favoritePhotos = this.setFavorites();
	}//end function: updateFav
	*/
}