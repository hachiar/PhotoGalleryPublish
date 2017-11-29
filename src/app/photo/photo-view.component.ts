import { Component, OnInit } from '@angular/core';
import { Photo } from './../photo/photo';
import { PhotoService } from '../photo/photo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-photo-view',
	templateUrl: './photo-view.component.html',
	styleUrls: ['./photo-view.component.css']
})

export class PhotoViewComponent implements OnInit {
	photo:PhotoComponent;
	
	constructor(private _route: ActivatedRoute,private _photoService: PhotoService){
		console.log(this._route.snapshot.paramMap.get('id'));
	}
	
	/*
	photo: PhotoComponent = 
		new PhotoComponent({
			"id": 0,
			"name": "Weihnachtsbaum",
			"url": "https://image.freepik.com/free-vector/collection-of-cartoon-christmas-trees_23-2147717781.jpg",
			"rating": 5,
			"details" : `"Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
							sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
							Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
							nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
							reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
							pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
							culpa qui officia deserunt mollit anim id est laborum."`,
			"favorite": true
		});
	*/
	ngOnInit():void{
		console.log("On Init - photo-view component");
		let id = +this._route.snapshot.paramMap.get('id');
		//this.photo = this._photoService.getPhoto(id);
		
	}
}