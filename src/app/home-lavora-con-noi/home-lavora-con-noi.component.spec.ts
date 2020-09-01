import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLavoraConNoiComponent } from './home-lavora-con-noi.component';

describe('HomeLavoraConNoiComponent', () => {
  let component: HomeLavoraConNoiComponent;
  let fixture: ComponentFixture<HomeLavoraConNoiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeLavoraConNoiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeLavoraConNoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
