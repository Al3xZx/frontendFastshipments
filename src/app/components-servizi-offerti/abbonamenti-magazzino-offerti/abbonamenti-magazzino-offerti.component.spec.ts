import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbbonamentiMagazzinoOffertiComponent } from './abbonamenti-magazzino-offerti.component';

describe('AbbonamentiMagazzinoOffertiComponent', () => {
  let component: AbbonamentiMagazzinoOffertiComponent;
  let fixture: ComponentFixture<AbbonamentiMagazzinoOffertiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbbonamentiMagazzinoOffertiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbbonamentiMagazzinoOffertiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
