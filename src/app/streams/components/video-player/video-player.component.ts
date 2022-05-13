import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements OnChanges {

  @Input() userName: string;
  url: string;

  ngOnChanges(changes: SimpleChanges): void {
    this.url = environment.twitch.videoPlayerUrl.replace('[USERNAME]', changes.userName.currentValue);
    console.log('this.url', this.url);
  }
}
