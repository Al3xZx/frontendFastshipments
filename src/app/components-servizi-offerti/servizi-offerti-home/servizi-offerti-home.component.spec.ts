import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiziOffertiHomeComponent } from './servizi-offerti-home.component';

describe('ServiziOffertiHomeComponent', () => {
  let component: ServiziOffertiHomeComponent;
  let fixture: ComponentFixture<ServiziOffertiHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiziOffertiHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiziOffertiHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
