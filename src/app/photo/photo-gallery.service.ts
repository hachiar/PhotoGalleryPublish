import { Injectable } from '@angular/core';
import { ApiService } from './../util/api.service';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class PhotoGalleryService {

  constructor(public apiService: ApiService) { }
  getUrl = 'http://serenity.ist.rit.edu/~jxs8894/phpphotogalleryservice/photo/getPhotos.php';

  public getPhotos() {
    return this.apiService.get(this.getUrl);
  }
}
