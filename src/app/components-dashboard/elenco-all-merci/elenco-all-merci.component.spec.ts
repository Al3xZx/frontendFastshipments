import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElencoAllMerciComponent } from './elenco-all-merci.component';

describe('ElencoAllMerciComponent', () => {
  let component: ElencoAllMerciComponent;
  let fixture: ComponentFixture<ElencoAllMerciComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElencoAllMerciComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElencoAllMerciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
