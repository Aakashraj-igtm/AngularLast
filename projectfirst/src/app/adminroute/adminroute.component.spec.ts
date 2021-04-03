import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminrouteComponent } from './adminroute.component';

describe('AdminrouteComponent', () => {
  let component: AdminrouteComponent;
  let fixture: ComponentFixture<AdminrouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminrouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminrouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
