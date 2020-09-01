import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbbonamentiOffertiComponent } from './abbonamenti-offerti.component';

describe('AbbonamentiOffertiComponent', () => {
  let component: AbbonamentiOffertiComponent;
  let fixture: ComponentFixture<AbbonamentiOffertiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbbonamentiOffertiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbbonamentiOffertiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
