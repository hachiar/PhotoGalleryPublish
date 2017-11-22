
import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-star',
	templateUrl: './star.component.html',
	styleUrls:['./star.component.css']
})

export class StarComponent implements OnChanges{
	
	@Input() rating:number;//where to obtain the rating
	maxRating:number = 5;//the max amount of stars
	
	totalFull:number;//total amount of full stars
	totalEmpty:number;//total amount of empty stars
	half:boolean = false;//do we have a half star?
	
	ratingStars:any[];//store the types of stars we need
	
	//all the possible types of stars
	fullStar:string = "fa-star";
	emptyStar:string = "fa-star-o";
	halfStar:string = "fa-star-half-o";
	
	@Output() ratingClicked: EventEmitter<number> = new EventEmitter();
	
	onClick(){
		console.log("Wir haben die Wertung gedrückt.");
		this.ratingClicked.emit(this.rating);
	}
	
	/**
	* Determine how many stars we need to show for a rating
	* @see array.fill(value, start, end)
	*/
	determineStars(){
		this.ratingStars = [];
		//grab anything that would make it part of a star
		var not_whole:number = this.rating%1;
		var empty_heart_extra:number = 0;
		//find out how many TOTAL FULL stars we need
		this.totalFull = this.rating/1 - not_whole;
		this.addStars(this.fullStar, this.totalFull);
		
		//totalEmpty should be total allowed - total full stars
		this.totalEmpty = (this.maxRating - this.totalFull);
		
		if(not_whole > 0.49){//if it's more than half, show half
			this.half = true;
			this.ratingStars.push({"type": this.halfStar});
			this.totalEmpty --;//since we are adding one, remove 1 from empty
		}//end if: do we wanna add a half star?
		
		//add the empty stars
		this.addStars(this.emptyStar, this.totalEmpty);
	}//end function: determineStars
	
	/**
	* Add stars needed to the stars rating array
	* @param star {string} the type of star
	* @param amt {number} amount of of this star to add
	*/
	addStars(star:string, amt:number){
		for(var i = 0; i < amt; i++){
			this.ratingStars.push({"type": star});
		}//end for: go through as many as we need
	}//end function: addStars
	
	/**
	* Go through and update the amount/type of stars we need
	*/
	ngOnChanges():void{
		this.determineStars();
	}//end OnChanges
	
}//end class: StarComponent

