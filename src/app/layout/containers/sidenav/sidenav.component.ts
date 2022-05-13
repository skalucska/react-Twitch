import {Component, OnInit} from '@angular/core';
import {StreamsService} from '../../../streams/services/streams.service';
import {Stream} from '../../../streams/models/stream';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  streams$: Observable<Stream[]>;

  constructor(private streamsService: StreamsService) {
  }

  ngOnInit(): void {
    this.streams$ = this.streamsService.getStreams(20);
  }

}
