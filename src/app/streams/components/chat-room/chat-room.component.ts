import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';

import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.scss']
})
export class ChatRoomComponent implements OnChanges {

  @Input() userName: string;
  url: string;

  ngOnChanges(changes: SimpleChanges): void {
    this.url = environment.twitch.chatRoomUrl.replace('[USERNAME]', changes.userName.currentValue);
  }

}
