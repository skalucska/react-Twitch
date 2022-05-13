import {Component, OnInit} from '@angular/core';
import {StreamsService} from '../../../streams/services/streams.service';
import {Observable} from 'rxjs';
import {Stream} from '../../../streams/models/stream';
import {ActivatedRoute} from '@angular/router';
import {pluck} from 'rxjs/operators';
import {Game} from '../../models/game';
import {GamesService} from '../../services/games.service';

@Component({
  selector: 'app-game-live-channels',
  templateUrl: './game-live-channels.component.html',
  styleUrls: ['./game-live-channels.component.scss']
})
export class GameLiveChannelsComponent implements OnInit {

  currentGame$: Observable<Game>;
  streams$: Observable<Stream[]>;

  constructor(private activatedRoute: ActivatedRoute, private streamsService: StreamsService, private gamesService: GamesService) {
  }

  ngOnInit(): void {
    const gameId$ = this.activatedRoute.params.pipe(pluck('gameId'));

    this.currentGame$ = this.gamesService.getGameById$(gameId$);
    this.streams$ = this.streamsService.getStreamsByGameId$(gameId$);
  }
}
