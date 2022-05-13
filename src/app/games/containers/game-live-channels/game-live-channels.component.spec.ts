import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {GameLiveChannelsComponent} from './game-live-channels.component';

describe('GameStreamsComponent', () => {
  let component: GameLiveChannelsComponent;
  let fixture: ComponentFixture<GameLiveChannelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GameLiveChannelsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameLiveChannelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
