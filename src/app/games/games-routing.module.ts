import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TopGamesComponent} from './containers/top-games/top-games.component';
import {GameLiveChannelsComponent} from './containers/game-live-channels/game-live-channels.component';
import {GameVideosComponent} from './containers/game-videos/game-videos.component';
import {GameClipsComponent} from './containers/game-clips/game-clips.component';

const routes: Routes = [
  {path: '', redirectTo: 'top'},
  {path: 'top', component: TopGamesComponent},
  {path: ':gameId/streams', component: GameLiveChannelsComponent},
  {path: ':gameId/clips', component: GameClipsComponent},
  {path: ':gameId/videos', component: GameVideosComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesRoutingModule {
}
