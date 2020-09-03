import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpedizioniEffettuateComponent } from './spedizioni-effettuate.component';

describe('SpedizioniEffettuateComponent', () => {
  let component: SpedizioniEffettuateComponent;
  let fixture: ComponentFixture<SpedizioniEffettuateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpedizioniEffettuateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpedizioniEffettuateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
