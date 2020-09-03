import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElencoMerciMagazzinoComponent } from './elenco-merci-magazzino.component';

describe('ElencoMerciMagazzinoComponent', () => {
  let component: ElencoMerciMagazzinoComponent;
  let fixture: ComponentFixture<ElencoMerciMagazzinoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElencoMerciMagazzinoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElencoMerciMagazzinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
