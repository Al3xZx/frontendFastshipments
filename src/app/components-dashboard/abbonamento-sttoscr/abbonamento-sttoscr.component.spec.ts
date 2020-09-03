import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbbonamentoSttoscrComponent } from './abbonamento-sttoscr.component';

describe('AbbonamentoSttoscrComponent', () => {
  let component: AbbonamentoSttoscrComponent;
  let fixture: ComponentFixture<AbbonamentoSttoscrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbbonamentoSttoscrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbbonamentoSttoscrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
