import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserIdDetailComponent } from './user-id-detail.component';

describe('UserIdDetailComponent', () => {
  let component: UserIdDetailComponent;
  let fixture: ComponentFixture<UserIdDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserIdDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserIdDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
