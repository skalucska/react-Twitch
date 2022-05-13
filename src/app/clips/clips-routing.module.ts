import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClipsComponent } from './containers/clips/clips.component';
import {ClipComponent} from './containers/clip/clip.component';

// TODO: Route(s) + container(s) à créer
const routes: Routes = [
{path: ':gameId/clips', component: ClipsComponent},
{path: ':id/clip', component: ClipComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClipsRoutingModule { }
