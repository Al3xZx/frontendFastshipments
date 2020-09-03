import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpedizioneMerciComponent } from './spedizione-merci.component';

describe('SpedizioneMerciComponent', () => {
  let component: SpedizioneMerciComponent;
  let fixture: ComponentFixture<SpedizioneMerciComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpedizioneMerciComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpedizioneMerciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
