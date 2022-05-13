import {Component, Input} from '@angular/core';
import {Clip} from '../../../clips/models/clip';
import {Video} from '../../models/video';

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.scss']
})
export class VideoCardComponent {
  @Input() video: Video;
}
