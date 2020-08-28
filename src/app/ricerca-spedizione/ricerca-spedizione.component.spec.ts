import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RicercaSpedizioneComponent } from './ricerca-spedizione.component';

describe('RicercaSpedizioneComponent', () => {
  let component: RicercaSpedizioneComponent;
  let fixture: ComponentFixture<RicercaSpedizioneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RicercaSpedizioneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RicercaSpedizioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
