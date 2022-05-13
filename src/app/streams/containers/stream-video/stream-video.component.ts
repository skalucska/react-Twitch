import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Stream} from '../../models/stream';
import {ActivatedRoute} from '@angular/router';
import {StreamsService} from '../../services/streams.service';
import {pluck} from 'rxjs/operators';

@Component({
  selector: 'app-stream-video',
  templateUrl: './stream-video.component.html',
  styleUrls: ['./stream-video.component.scss']
})
export class StreamVideoComponent implements OnInit {

  stream$: Observable<Stream>;

  constructor(private activatedRoute: ActivatedRoute, private streamsService: StreamsService) {
  }

  ngOnInit(): void {
    const userLogin$ = this.activatedRoute.params.pipe(pluck('userLogin'));
    this.stream$ = this.streamsService.getStreamByUserLogin$(userLogin$);
  }

}
