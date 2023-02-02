import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerialnoComponent } from './serialno.component';

describe('SerialnoComponent', () => {
  let component: SerialnoComponent;
  let fixture: ComponentFixture<SerialnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SerialnoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SerialnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
