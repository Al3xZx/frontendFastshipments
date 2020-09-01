import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbbonamentoComponent } from './abbonamento.component';

describe('AbbonamentoComponent', () => {
  let component: AbbonamentoComponent;
  let fixture: ComponentFixture<AbbonamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbbonamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbbonamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
