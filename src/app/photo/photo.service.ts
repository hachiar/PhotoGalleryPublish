import { Injectable } from '@angular/core';
import { IPhoto, Photo } from './photo';

@Injectable()
export class PhotoService{	
	photos:Photo[] = [
		new Photo(
			0,
			"Weihnachtsbaum",
			"https://image.freepik.com/free-vector/collection-of-cartoon-christmas-trees_23-2147717781.jpg",
			3.5,
			"",
			true
		),new Photo(
			1,
			"Tiere tragen einen Pulli",
			"https://image.freepik.com/free-vector/collection-of-six-beautiful-animals-with-winter-clothes_23-2147716790.jpg",
			4,
			"",
			true
		),new Photo(
			2,
			"Adventskalender",
			"https://image.freepik.com/free-vector/cute-hand-drawn-advent-calendar-on-a-grey-background_23-2147715182.jpg",
			4.5,
			"",
			false
		),new Photo(
			3,
			"Schneemann",
			"https://image.freepik.com/free-vector/snowmen-background-in-vintage-style_23-2147714212.jpg",
			4.8,
			"",
			true
		),new Photo(
			4,
			"Lebkuchenmann",
			"https://image.freepik.com/free-vector/pack-of-nice-gingerbread-cookies_23-2147714300.jpg",
			3.2,
			"",
			false
		),new Photo(
			5,
			"Lebkuchenhaus",
			"https://image.freepik.com/free-vector/collection-of-decorated-gingerbread-houses_23-2147719679.jpg",
			3.2,
			"",
			false
		),new Photo(
			6,
			"Vogel",
			"https://image.freepik.com/free-vector/cute-birds-with-winter-clothes_23-2147584063.jpg",
			3.8,
			"",
			false
		),new Photo(
			7,
			"Tiere",
			"https://image.freepik.com/free-vector/set-of-birds-and-nice-forest-animals-wearing-winter-clothes_23-2147580403.jpg",
			3.8,
			"",
			false
		)
	];
	
	
	getPhotos():Photo[]{
		return this.photos;
	}
	
	getFavorites():Photo[]{
		return this.photos.filter((photo: Photo) => 
		photo.favorite == true);
	}
	
	getPhoto(id:number):Photo{
		return this.photos.filter(item => item.id == id)[0]
	}
	
}//end class