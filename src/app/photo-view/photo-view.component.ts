import { Component, OnInit } from '@angular/core';
import { PhotoComponent } from './../photo/photo.component';

@Component({
	selector: 'app-photo-view',
	templateUrl: './photo-view.component.html',
	styleUrls: ['./photo-view.component.css']
})

export class PhotoViewComponent implements OnInit {
	photo: PhotoComponent = 
		{
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
			"favorite": true,

			ngOnInit():void{
				console.log("On Init - photo-view component - PhotoComponent");
			}
		};
	
	ngOnInit():void{
		console.log("On Init - photo-view component");
	}
}