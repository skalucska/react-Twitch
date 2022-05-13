import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Game} from '../../models/game';
import {ActivatedRoute} from '@angular/router';
import {GamesService} from '../../services/games.service';
import {pluck, switchMap} from 'rxjs/operators';
import {Video} from '../../../videos/models/video';
import {VideosService} from '../../../videos/services/videos.service';

@Component({
  selector: 'app-game-videos',
  templateUrl: './game-videos.component.html',
  styleUrls: ['./game-videos.component.scss']
})
export class GameVideosComponent {
  currentGame$: Observable<Game>;
  video$: Observable<Video[]>;

  constructor(private activatedRoute: ActivatedRoute, private videosService: VideosService, private gamesService: GamesService) {
  }

  ngOnInit(): void {
    const gameId$ = this.activatedRoute.params.pipe(pluck('gameId'));

    this.currentGame$ = this.gamesService.getGameById$(gameId$);
    this.video$ = this.videosService.getVideosByGameId$(gameId$);
  }

}
