import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RichiestaSpedizioneAbbonamentoComponent } from './richiesta-spedizione-abbonamento.component';

describe('RichiestaSpedizioneAbbonamentoComponent', () => {
  let component: RichiestaSpedizioneAbbonamentoComponent;
  let fixture: ComponentFixture<RichiestaSpedizioneAbbonamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RichiestaSpedizioneAbbonamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RichiestaSpedizioneAbbonamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
