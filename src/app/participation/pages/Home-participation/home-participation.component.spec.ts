import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeParticipationComponent } from './home-participation.component';

describe('HomeParticipationComponent', () => {
  let component: HomeParticipationComponent;
  let fixture: ComponentFixture<HomeParticipationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeParticipationComponent]
    });
    fixture = TestBed.createComponent(HomeParticipationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
