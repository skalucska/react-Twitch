import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {GamesRoutingModule} from './games-routing.module';
import {TopGamesComponent} from './containers/top-games/top-games.component';
import {SharedModule} from '../shared/shared.module';
import {GameCardComponent} from './components/game-card/game-card.component';
import {GameLiveChannelsComponent} from './containers/game-live-channels/game-live-channels.component';
import {StreamsModule} from '../streams/streams.module';
import {GameClipsComponent} from './containers/game-clips/game-clips.component';
import {GameVideosComponent} from './containers/game-videos/game-videos.component';
import {GameNavigationComponent} from './components/game-navigation/game-navigation.component';
import {ClipsModule} from '../clips/clips.module';
import {VideosModule} from '../videos/videos.module';
import {LayoutModule} from '../layout/layout.module';

@NgModule({
  declarations: [
    TopGamesComponent,
    GameCardComponent,
    GameLiveChannelsComponent,
    GameClipsComponent,
    GameVideosComponent,
    GameNavigationComponent
  ],
    imports: [
        CommonModule,
        GamesRoutingModule,
        SharedModule,
        StreamsModule,
        ClipsModule,
        VideosModule,
        LayoutModule
    ]
})
export class GamesModule {
}
