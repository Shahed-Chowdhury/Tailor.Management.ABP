import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitedUserListComponent } from './invited-user-list.component';

describe('InvitedUserListComponent', () => {
  let component: InvitedUserListComponent;
  let fixture: ComponentFixture<InvitedUserListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvitedUserListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvitedUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
