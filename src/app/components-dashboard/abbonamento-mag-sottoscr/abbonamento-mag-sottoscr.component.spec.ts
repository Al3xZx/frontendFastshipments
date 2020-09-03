import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbbonamentoMagSottoscrComponent } from './abbonamento-mag-sottoscr.component';

describe('AbbonamentoMagSottoscrComponent', () => {
  let component: AbbonamentoMagSottoscrComponent;
  let fixture: ComponentFixture<AbbonamentoMagSottoscrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbbonamentoMagSottoscrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbbonamentoMagSottoscrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
