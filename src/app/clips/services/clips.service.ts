import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { TwitchService } from 'src/app/api/services/twitch.service';
import { Clip } from '../models/clip';

@Injectable({
  providedIn: 'root'
})
export class ClipsService {
  getClips(): Observable<Clip[]> {
    throw new Error('Method not implemented.');
  }
  constructor(private readonly twitchService: TwitchService) {
  }

  getClipsByGameId$(gameId$: Observable<number>): Observable<Clip[]> {
    return gameId$.pipe(switchMap(gameId => this.getClipByGameId(gameId)));
  }
  getClipByGameId(gameId: number): Observable<Clip[]> {
    return this.twitchService.getAll<Clip>(`/clips?game_id=${gameId}`);
  }
 
}
