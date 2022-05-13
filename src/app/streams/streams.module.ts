import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {StreamsRoutingModule} from './streams-routing.module';
import {StreamsComponent} from './containers/streams/streams.component';
import {StreamCardComponent} from './components/stream-card/stream-card.component';
import {SharedModule} from '../shared/shared.module';
import { StreamVideoComponent } from './containers/stream-video/stream-video.component';
import { VideoPlayerComponent } from './components/video-player/video-player.component';
import { ChatRoomComponent } from './components/chat-room/chat-room.component';

@NgModule({
  declarations: [
    StreamsComponent,
    StreamCardComponent,
    StreamVideoComponent,
    VideoPlayerComponent,
    ChatRoomComponent
  ],
  exports: [
    StreamCardComponent
  ],
  imports: [
    CommonModule,
    StreamsRoutingModule,
    SharedModule
  ]
})
export class StreamsModule {
}
