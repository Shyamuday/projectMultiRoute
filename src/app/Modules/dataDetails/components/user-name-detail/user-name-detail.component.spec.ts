import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserNameDetailComponent } from './user-name-detail.component';

describe('UserNameDetailComponent', () => {
  let component: UserNameDetailComponent;
  let fixture: ComponentFixture<UserNameDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserNameDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserNameDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
