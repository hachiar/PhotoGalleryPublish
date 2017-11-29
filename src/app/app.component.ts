import { Component } from '@angular/core';
import { PhotoService } from './photo/photo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[PhotoService]
})

export class AppComponent {
  title = 'My Gallery';
}

