import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoSpedizioneComponent } from './info-spedizione.component';

describe('InfoSpedizioneComponent', () => {
  let component: InfoSpedizioneComponent;
  let fixture: ComponentFixture<InfoSpedizioneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoSpedizioneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoSpedizioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
