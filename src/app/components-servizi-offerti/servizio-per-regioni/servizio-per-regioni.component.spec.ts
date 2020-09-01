import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServizioPerRegioniComponent } from './servizio-per-regioni.component';

describe('ServizioPerRegioniComponent', () => {
  let component: ServizioPerRegioniComponent;
  let fixture: ComponentFixture<ServizioPerRegioniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServizioPerRegioniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServizioPerRegioniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
