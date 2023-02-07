import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountDownChildComponent } from './count-down-child.component';

describe('CountDownChildComponent', () => {
  let component: CountDownChildComponent;
  let fixture: ComponentFixture<CountDownChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountDownChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountDownChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
