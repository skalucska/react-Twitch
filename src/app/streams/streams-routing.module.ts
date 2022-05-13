import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StreamsComponent} from './containers/streams/streams.component';
import {StreamVideoComponent} from './containers/stream-video/stream-video.component';

const routes: Routes = [
  {path: '', component: StreamsComponent},
  {path: ':userLogin', component: StreamVideoComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StreamsRoutingModule {
}
