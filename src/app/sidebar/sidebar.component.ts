import { Component, onChanges } from '@angular/core';

@Component({
	selector: 'app-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnChanges{
	currentPage:string = "Dashboard";
	pageList:string[]=["Dashboard","Favorites","All Photos"];
	
	selectPage():void{
		console.log("Wie geht's?");
	}
	
	/**
	* 
	*/
	ngOnChanges():void{
		
	}//end OnChanges
}