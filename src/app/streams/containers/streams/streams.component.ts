import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {Stream} from '../../models/stream';
import {StreamsService} from '../../services/streams.service';

@Component({
  selector: 'app-streams',
  templateUrl: './streams.component.html',
  styleUrls: ['./streams.component.scss']
})
export class StreamsComponent {
  stream$: Observable<Stream[]>;

  constructor(private streamsService: StreamsService) {
  }

  ngOnInit(): void {
    this.stream$ = this.streamsService.getStreams(100);
  }
}
