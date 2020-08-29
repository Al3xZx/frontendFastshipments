import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfiloAziendaleComponent } from './profilo-aziendale.component';

describe('ProfiloAziendaleComponent', () => {
  let component: ProfiloAziendaleComponent;
  let fixture: ComponentFixture<ProfiloAziendaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfiloAziendaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfiloAziendaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
