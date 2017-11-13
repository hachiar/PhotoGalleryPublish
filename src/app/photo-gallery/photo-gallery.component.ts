import { Component, OnInit } from '@angular/core';
import { PhotoGalleryService } from './photo-gallery.service';
@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.css']
})
export class PhotoGalleryComponent implements OnInit {

  constructor(public photoService: PhotoGalleryService) { }

  ngOnInit() {
    this.photoService.getPhotos().subscribe(data=>{
      console.log(data);
    })
  }

}
