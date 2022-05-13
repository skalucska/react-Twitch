import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {pluck} from 'rxjs/operators';
import {Clip} from '../../models/clip';
import {ClipsService} from '../../services/clips.service';

@Component({
  selector: 'app-clip',
  templateUrl: './clip.component.html',
  styleUrls: ['./clip.component.scss']
})
export class ClipComponent implements OnInit {

  clip$: Observable<Clip>;

  constructor(private activatedRoute: ActivatedRoute, private clipService: ClipsService) {
  }

  ngOnInit(): void {
    const id$ = this.activatedRoute.params.pipe(pluck('id'));
    this.clip$ = this.clipService.getClipById$(id$);
  }

}
