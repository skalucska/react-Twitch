import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Game} from '../models/game';
import {TwitchService} from '../../api/services/twitch.service';
import {switchMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private readonly twitchService: TwitchService) {
  }

  getTopGames(): Observable<Game[]> {
    return this.twitchService.getAll<Game>(`/games/top`);
  }

  getGameById(gameId: number): Observable<Game> {
    return this.twitchService.getOne<Game>(`/games?id=${gameId}`);
  }

  getGameById$(id$: Observable<number>): Observable<Game> {
    return id$.pipe(switchMap(id => this.getGameById(id)));
  }

}
