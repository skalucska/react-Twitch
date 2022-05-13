import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {VideosRoutingModule} from './videos-routing.module';
import {VideoCardComponent} from './components/video-card/video-card.component';
import {SharedModule} from '../shared/shared.module';
import {VideosComponent} from './containers/videos/videos.component';

@NgModule({
  declarations: [
    VideoCardComponent,
    VideosComponent
  ],
  exports: [
    VideoCardComponent
  ],
  imports: [
    CommonModule,
    VideosRoutingModule,
    SharedModule
  ]
})
export class VideosModule {
}
