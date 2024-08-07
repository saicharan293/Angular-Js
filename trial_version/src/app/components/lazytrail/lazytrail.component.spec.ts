import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazytrailComponent } from './lazytrail.component';

describe('LazytrailComponent', () => {
  let component: LazytrailComponent;
  let fixture: ComponentFixture<LazytrailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LazytrailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LazytrailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
