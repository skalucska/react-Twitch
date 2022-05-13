import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Clip } from '../../models/clip';
import { ClipsService } from '../../services/clips.service';

@Component({
  selector: 'app-clips',
  templateUrl: './clips.component.html',
  styleUrls: ['./clips.component.scss']
})
export class ClipsComponent implements OnInit {
  clips$ : Observable<Clip[]>;
  constructor(private clipsService : ClipsService) { 

  }

  ngOnInit(): void {
    // this.clips$ = this.clipsService.getClips();
  }

}
