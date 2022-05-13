import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {switchMap} from 'rxjs/operators';
import {Video} from '../models/video';
import {TwitchService} from '../../api/services/twitch.service';

@Injectable({
  providedIn: 'root'
})

export class VideosService {
  constructor(private readonly twitchService: TwitchService) {
  }

  getVideosByGameId$(gameId$: Observable<number>): Observable<Video[]> {
    return gameId$.pipe(switchMap(gameId => this.getVideosByGameId(gameId)));
  }
  getVideosByGameId(gameId: number): Observable<Video[]> {
    return this.twitchService.getAll<Video>(`/videos?game_id=${gameId}`);
  }
}
