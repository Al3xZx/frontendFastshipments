import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidaturaAnnuncioComponent } from './candidatura-annuncio.component';

describe('CandidaturaAnnuncioComponent', () => {
  let component: CandidaturaAnnuncioComponent;
  let fixture: ComponentFixture<CandidaturaAnnuncioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidaturaAnnuncioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidaturaAnnuncioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
