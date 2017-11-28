import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotoViewComponent } from './photo-view/photo-view.component';
import { PhotoListComponent } from './photos/photo-list.component';
import { HeartComponent } from './shared/heart.component';
import { StarComponent } from './shared/star.component';
import { SidebarComponent } from './sidebar/sidebar.component';

const routes: Routes = [
  { path: 'photo-view', component: PhotoViewComponent },
  { path: 'photo-list', component: PhotoListComponent },
  { path: 'heart', component: HeartComponent },
  { path: 'star', component: StarComponent },
  { path: 'sidebar', component: SidebarComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
