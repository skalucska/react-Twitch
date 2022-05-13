import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// TODO: Route(s) + container(s) à créer
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideosRoutingModule { }
