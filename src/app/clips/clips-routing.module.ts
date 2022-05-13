import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClipsComponent } from './containers/clips/clips.component';

// TODO: Route(s) + container(s) à créer
const routes: Routes = [
{path: ':gameId/clips', component: ClipsComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClipsRoutingModule { }
