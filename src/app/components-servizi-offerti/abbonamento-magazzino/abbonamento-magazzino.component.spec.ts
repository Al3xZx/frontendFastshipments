import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbbonamentoMagazzinoComponent } from './abbonamento-magazzino.component';

describe('AbbonamentoMagazzinoComponent', () => {
  let component: AbbonamentoMagazzinoComponent;
  let fixture: ComponentFixture<AbbonamentoMagazzinoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbbonamentoMagazzinoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbbonamentoMagazzinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
