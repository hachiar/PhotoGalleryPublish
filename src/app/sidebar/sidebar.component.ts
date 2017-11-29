import { Component } from '@angular/core';

@Component({
	selector: 'app-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent{
	pageList:any[]=[	
		{
			"name" :"All Photos",
			"route" : "gallery"
		},{
			"name" : "Favorites",
			"route" : "favorites"
		}
	];
}