import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-game-navigation',
  templateUrl: './game-navigation.component.html',
  styleUrls: ['./game-navigation.component.scss']
})
export class GameNavigationComponent {
  @Input() gameId;
}
