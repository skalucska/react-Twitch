import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Stream} from '../models/stream';
import {TwitchService} from '../../api/services/twitch.service';
import {switchMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StreamsService {

  constructor(private twitchService: TwitchService) {
  }

  getStreams(limit: number): Observable<Stream[]> {
    return this.twitchService.getAll<Stream>(`/streams?first=${limit}`);
  }

  getStreamByUserLogin(userLogin: string): Observable<Stream> {
    return this.twitchService.getOne<Stream>(`/streams?user_login=${userLogin}`);
  }

  getStreamByUserLogin$(userLogin$: Observable<string>): Observable<Stream> {
    return userLogin$.pipe(switchMap(userLogin => this.getStreamByUserLogin(userLogin)));
  }

  getStreamsByGameId$(gameId$: Observable<number>): Observable<Stream[]> {
    return gameId$.pipe(switchMap(gameId => this.getStreamsByGameId(gameId)));
  }

  getStreamsByGameId(gameId: number): Observable<Stream[]> {
    return this.twitchService.getAll<Stream>(`/streams?game_id=${gameId}`);
  }
}
