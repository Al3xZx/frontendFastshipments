import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RichiestaRitiroMerciComponent } from './richiesta-ritiro-merci.component';

describe('RichiestaRitiroMerciComponent', () => {
  let component: RichiestaRitiroMerciComponent;
  let fixture: ComponentFixture<RichiestaRitiroMerciComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RichiestaRitiroMerciComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RichiestaRitiroMerciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
