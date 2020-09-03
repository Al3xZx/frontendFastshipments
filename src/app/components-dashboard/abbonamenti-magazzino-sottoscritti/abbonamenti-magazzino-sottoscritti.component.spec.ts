import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbbonamentiMagazzinoSottoscrittiComponent } from './abbonamenti-magazzino-sottoscritti.component';

describe('AbbonamentiMagazzinoSottoscrittiComponent', () => {
  let component: AbbonamentiMagazzinoSottoscrittiComponent;
  let fixture: ComponentFixture<AbbonamentiMagazzinoSottoscrittiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbbonamentiMagazzinoSottoscrittiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbbonamentiMagazzinoSottoscrittiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
