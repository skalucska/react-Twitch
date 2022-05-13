import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {VideosComponent} from './containers/videos/videos.component';

// TODO: Route(s) + container(s) à créer
const routes: Routes = [
  {path: ':gameId/videos', component: VideosComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideosRoutingModule { }
