
import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-heart',
	templateUrl: './heart.component.html',
	styleUrls:['./heart.component.css']
})

export class HeartComponent implements OnChanges{
	
	@Input() favorite:boolean;//where to obtain the rating
	
	//all the possible types of stars
	favHeart:string = "fa-heart";
	notFavHeart:string = "fa-heart-o";
	showHeart:string;
	
	@Output() favoriteClicked: EventEmitter<boolean> = new EventEmitter();
	
	onClick(){
		console.log("Wir haben das Herz gedrückt.");
		this.favoriteClicked.emit(this.favorite);
	}
	
	/**
	* Go through and update the amount/type of stars we need
	*/
	ngOnChanges():void{
		this.showHeart = (this.favorite) ? this.favHeart : this.notFavHeart
	}//end OnChanges
	
}//end class: StarComponent

