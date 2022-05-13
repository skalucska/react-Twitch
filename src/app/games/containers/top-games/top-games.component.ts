import {Component, OnInit} from '@angular/core';
import {GamesService} from '../../services/games.service';
import {Observable} from 'rxjs';
import {Game} from '../../models/game';

@Component({
  selector: 'app-top-games',
  templateUrl: './top-games.component.html',
  styleUrls: ['./top-games.component.scss']
})
export class TopGamesComponent implements OnInit {

  topGames$: Observable<Game[]>;

  constructor(private gamesService: GamesService) {
  }

  ngOnInit(): void {
    this.topGames$ = this.gamesService.getTopGames();
  }
}
