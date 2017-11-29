import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PhotoListComponent } from './photo/photo-list.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { StarComponent } from './shared/star.component';
import { HeartComponent } from './shared/heart.component';
import { PhotoViewComponent } from './photo/photo-view.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
	SidebarComponent,
	PhotoListComponent,
    PhotoViewComponent,
	StarComponent,
	HeartComponent
  ],
  imports: [
    BrowserModule,
	FormsModule,
	AngularFontAwesomeModule,
	RouterModule.forRoot([
		{ path: 'dashboard', component: PhotoListComponent },
		{ path: 'favorites', component: PhotoListComponent},
		{ path: 'gallery', component: PhotoListComponent},
		{ path: 'photo/:id', component: PhotoViewComponent },
		{ path: '', redirectTo: 'gallery', pathMatch: 'full' },
		{ path: '**', redirectTo: 'gallery', pathMatch: 'full'}
	])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
