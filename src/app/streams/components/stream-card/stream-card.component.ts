import {Component, Input} from '@angular/core';
import {Stream} from '../../models/stream';

@Component({
  selector: 'app-stream-card',
  templateUrl: './stream-card.component.html',
  styleUrls: ['./stream-card.component.scss']
})
export class StreamCardComponent {
  @Input() stream: Stream;
}
