import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoterTakerComponent } from './voter-taker.component';

describe('VoterTakerComponent', () => {
  let component: VoterTakerComponent;
  let fixture: ComponentFixture<VoterTakerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoterTakerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoterTakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
