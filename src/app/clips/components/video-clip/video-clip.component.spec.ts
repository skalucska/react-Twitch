import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoCLipComponent } from './video-clip.component';

describe('VideoCLipComponent', () => {
  let component: VideoCLipComponent;
  let fixture: ComponentFixture<VideoCLipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoCLipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoCLipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
