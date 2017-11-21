import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PhotoListComponent } from './photos/photo-list.component';
<<<<<<< HEAD
import { AngularFontAwesomeModule } from 'angular-font-awesome';
=======
import { PhotoComponent } from './photo/photo.component';
>>>>>>> 801e7cc1f1f182ffd21fcc9f87c1a366efbf0dfa

@NgModule({
  declarations: [
    AppComponent,
	  PhotoListComponent,
    PhotoComponent
  ],
  imports: [
    BrowserModule,
<<<<<<< HEAD
	FormsModule,
	AngularFontAwesomeModule
=======
	  FormsModule
>>>>>>> 801e7cc1f1f182ffd21fcc9f87c1a366efbf0dfa
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
