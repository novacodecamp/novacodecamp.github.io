import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerTrackSpeakersComponent } from './per-track-speakers.component';

describe('PerTrackSpeakersComponent', () => {
  let component: PerTrackSpeakersComponent;
  let fixture: ComponentFixture<PerTrackSpeakersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerTrackSpeakersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerTrackSpeakersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
