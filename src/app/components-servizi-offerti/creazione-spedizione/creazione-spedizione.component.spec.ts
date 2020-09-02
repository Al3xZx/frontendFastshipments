import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreazioneSpedizioneComponent } from './creazione-spedizione.component';

describe('CreazioneSpedizioneComponent', () => {
  let component: CreazioneSpedizioneComponent;
  let fixture: ComponentFixture<CreazioneSpedizioneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreazioneSpedizioneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreazioneSpedizioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
