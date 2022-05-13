import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Stream} from '../../../streams/models/stream';
import {Game} from '../../models/game';
import {ActivatedRoute} from '@angular/router';
import {StreamsService} from '../../../streams/services/streams.service';
import {GamesService} from '../../services/games.service';
import {switchMap} from 'rxjs/operators';
import {Video} from '../../../videos/models/video';
import {VideosService} from '../../../videos/services/videos.service';

@Component({
  selector: 'app-game-videos',
  templateUrl: './game-videos.component.html',
  styleUrls: ['./game-videos.component.scss']
})
export class GameVideosComponent {


}
