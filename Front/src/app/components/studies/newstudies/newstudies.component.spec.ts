import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewstudiesComponent } from './newstudies.component';

describe('NewstudiesComponent', () => {
  let component: NewstudiesComponent;
  let fixture: ComponentFixture<NewstudiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewstudiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewstudiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
