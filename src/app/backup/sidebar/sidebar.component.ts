import { Component, OnChanges } from '@angular/core';

@Component({
	selector: 'app-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnChanges{
	currentPage:string = "Dashboard";
	pageList:any[]=[	
		{
			"name":"Dashboard",
			"route" : "gallery"
		},{
			"name" : "Favorites",
			"route" : "favorites"
		},{
			"name" :"All Photos",
			"route" : "gallery"
		}
	];
	
	selectPage():void{
		console.log("Wie geht's?");
	}
	
	/**
	* 
	*/
	ngOnChanges():void{
		
	}//end OnChanges
}