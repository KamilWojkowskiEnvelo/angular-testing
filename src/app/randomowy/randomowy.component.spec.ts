import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomowyComponent } from './randomowy.component';

describe('RandomowyComponent', () => {
  let component: RandomowyComponent;
  let fixture: ComponentFixture<RandomowyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomowyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomowyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
