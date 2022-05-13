import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from './auth/guards/auth.guard';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'games'},
  {path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
  {path: 'games', loadChildren: () => import('./games/games.module').then(m => m.GamesModule), canLoad: [AuthGuard]},
  {path: 'clips', loadChildren: () => import('./clips/clips.module').then(c => c.ClipsModule), canLoad: [AuthGuard]},
  {path: 'streams', loadChildren: () => import('./streams/streams.module').then(m => m.StreamsModule), canLoad: [AuthGuard]},
  {path: '**', pathMatch: 'full', redirectTo: 'games'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: false})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
