import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideotubeComponent } from './videotube.component';

describe('VideotubeComponent', () => {
  let component: VideotubeComponent;
  let fixture: ComponentFixture<VideotubeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideotubeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideotubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
