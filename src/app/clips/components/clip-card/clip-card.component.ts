import {Component, Input} from '@angular/core';
import { Clip } from '../../models/clip';

@Component({
  selector: 'app-clip-card',
  templateUrl: './clip-card.component.html',
  styleUrls: ['./clip-card.component.scss']
})
export class ClipCardComponent {
  @Input() clip: Clip;
}
