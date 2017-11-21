
import { Component, OnChanges } from '@angular/core';

@Component({
	selector: 'app-star',
	templateUrl: './star.component.html',
	styleUrls:['./star.component.css']
})

export class StarComponent implements OnChanges{
	rating:number;
	rateWidth:number;
	maxRating:number = 5;
	
	totalFull:number[];
	totalEmpty:number[];
	half:boolean = false;
	
	fullHeart:string = "fa-star";
	emptyHeart:string = "fa-star-o";
	halfHeart:string = "fa-star-half-o";
	
	/**
	* @constructor
	* @param rate {number} the rating
	*/
	constructor(rate:number){
		this.rating = rate;
		this.determineStars();
	}//end constructor
	
	/**
	* Determine how many stars we need to show for a rating
	* @see array.fill(value, start, end)
	*/
	determineStars(){
		//grab anything that would make it part of a star
		var not_whole = this.rating%1;
		var empty_heart_extra = 0;
		//find out how many TOTAL FULL stars we need
		var heartsNeeded = this.rating/1 - not_whole;
		this.totalFull.fill(0,0,heartsNeeded);
		
		//if it's more than half, show half
		if(not_whole > 0.49){
			this.half = true;
		}else{
			this.half = false;
			empty_heart_extra = (not_whole > 0) ? 1 : 0;
		}//end if: do we wanna add a half star?
		
		//empty stars are anything not
		var leftover = (this.maxRating - this.totalFull) + empty_heart_extra;
		this.totalEmpty.fill(0,0,leftover);
		
	}//end function: determineStars
	
	ngOnChanges():void{
		this.rateWidth = this.rating;
	}//end OnChanges
	
}//end class: StarComponent

