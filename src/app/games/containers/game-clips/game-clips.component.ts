import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Game} from '../../models/game';
import {ActivatedRoute} from '@angular/router';
import {GamesService} from '../../services/games.service';
import {pluck, switchMap} from 'rxjs/operators';
import {ClipsService} from '../../../clips/services/clips.service';
import {Clip} from '../../../clips/models/clip';

@Component({
  selector: 'app-game-clips',
  templateUrl: './game-clips.component.html',
  styleUrls: ['./game-clips.component.scss']
})
export class GameClipsComponent  {
  currentGame$: Observable<Game>;
  clips$: Observable<Clip[]>;

  constructor(private activatedRoute: ActivatedRoute, private clipsService: ClipsService, private gamesService: GamesService) {
  }

  ngOnInit(): void {
    const gameId$ = this.activatedRoute.params.pipe(pluck('gameId'));

    this.currentGame$ = this.gamesService.getGameById$(gameId$);
    this.clips$ = this.clipsService.getClipsByGameId$(gameId$);
  }
}
