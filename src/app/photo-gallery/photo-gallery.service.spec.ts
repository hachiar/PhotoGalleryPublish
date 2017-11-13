import { TestBed, inject } from '@angular/core/testing';

import { PhotoGalleryService } from './photo-gallery.service';

describe('PhotoGalleryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PhotoGalleryService]
    });
  });

  it('should be created', inject([PhotoGalleryService], (service: PhotoGalleryService) => {
    expect(service).toBeTruthy();
  }));
});
