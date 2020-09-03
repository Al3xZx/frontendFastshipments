import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbbonamentiSottoscrittiComponent } from './abbonamenti-sottoscritti.component';

describe('AbbonamentiSottoscrittiComponent', () => {
  let component: AbbonamentiSottoscrittiComponent;
  let fixture: ComponentFixture<AbbonamentiSottoscrittiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbbonamentiSottoscrittiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbbonamentiSottoscrittiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
