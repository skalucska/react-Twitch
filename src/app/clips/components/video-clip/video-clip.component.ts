import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-video-clip',
  templateUrl: './video-clip.component.html',
  styleUrls: ['./video-clip.component.scss']
})
export class VideoCLipComponent implements OnChanges {
  @Input() videoId: string;
  url: string;

  ngOnChanges(changes: SimpleChanges): void {
    this.url = environment.twitch.videoClipUrl.replace('[VIDEOID]', changes.videoId.currentValue);
    console.log('this.url', this.url);
  }
}
