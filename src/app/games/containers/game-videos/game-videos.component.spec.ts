import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameVideosComponent } from './game-videos.component';

describe('GameVideosComponent', () => {
  let component: GameVideosComponent;
  let fixture: ComponentFixture<GameVideosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameVideosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
