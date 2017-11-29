export interface IPhoto{
	id:number;
	name:string;
	url:string;
	p_rating:number;
	details:string;
	favorite:boolean;
}

export class Photo implements IPhoto{
		constructor(
			public id:number,
			public name:string,
			public url:string,
			public p_rating:number,
			public details:string,
			public favorite:boolean
		){}
	
	setFavorite(fav:boolean):void{
		this.favorite = !this.favorite;
	}
	
	getFavorite():boolean{
		return this.favorite;
	}	
}//end class: Photo

