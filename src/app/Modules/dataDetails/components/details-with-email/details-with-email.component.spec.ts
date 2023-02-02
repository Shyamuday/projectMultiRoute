import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsWithEmailComponent } from './details-with-email.component';

describe('DetailsWithEmailComponent', () => {
  let component: DetailsWithEmailComponent;
  let fixture: ComponentFixture<DetailsWithEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsWithEmailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsWithEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
