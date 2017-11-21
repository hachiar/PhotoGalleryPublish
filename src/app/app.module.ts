import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PhotoListComponent } from './photos/photo-list.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { StarComponent } from './shared/star.component';
import { HeartComponent } from './shared/heart.component';
import { PhotoComponent } from './photo/photo.component';


@NgModule({
  declarations: [
    AppComponent,
	PhotoListComponent,
    PhotoComponent,
	StarComponent,
	HeartComponent
  ],
  imports: [
    BrowserModule,
	FormsModule,
	AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
