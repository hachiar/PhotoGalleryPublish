import { Component, OnInit } from '@angular/core';
import { IPhoto } from './photo';

@Component({
	selector: 'app-photo',
	templateUrl: './photo.component.html',
	styleUrls: ['./photo.component.css']
})

export class PhotoComponent implements OnInit {
	photo: IPhoto = 
		{
			"id": 0,
			"name": "Photo Name",
			"url": "https://image.freepik.com/free-vector/collection-of-cartoon-christmas-trees_23-2147717781.jpg",
			"rating": 5,
			//new Array(5).fill().map((x,i)=>i)
			"favorite": true
		};
	
	ngOnInit():void{
		console.log("Hey we're in oninit!");
	}
}