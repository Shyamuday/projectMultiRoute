import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTalkComponent } from './data-talk.component';

describe('DataTalkComponent', () => {
  let component: DataTalkComponent;
  let fixture: ComponentFixture<DataTalkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataTalkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataTalkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
