import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ClipsRoutingModule} from './clips-routing.module';
import {ClipCardComponent} from './components/clip-card/clip-card.component';
import {SharedModule} from '../shared/shared.module';
import { ClipsComponent } from './containers/clips/clips.component';
import { VideoCLipComponent } from './components/video-clip/video-clip.component';
import { ClipComponent } from './containers/clip/clip.component';

@NgModule({
  declarations: [
    ClipCardComponent,
    ClipsComponent,
    VideoCLipComponent,
    ClipComponent
  ],
  exports: [
    ClipCardComponent
  ],
  imports: [
    CommonModule,
    ClipsRoutingModule,
    SharedModule
  ]
})
export class ClipsModule {
}
