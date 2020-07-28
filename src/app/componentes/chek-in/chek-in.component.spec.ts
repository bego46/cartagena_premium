import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChekInComponent } from './chek-in.component';

describe('ChekInComponent', () => {
  let component: ChekInComponent;
  let fixture: ComponentFixture<ChekInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChekInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChekInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
