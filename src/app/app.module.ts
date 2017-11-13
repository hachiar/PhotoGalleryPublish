import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { ApiService } from './util/api.service';
import { PhotoGalleryService } from './photo-gallery/photo-gallery.service';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PhotoGalleryComponent,
  ],
  imports: [
    BrowserModule, HttpModule],
  providers: [ApiService, PhotoGalleryService],
  bootstrap: [AppComponent],
})
export class AppModule { }
