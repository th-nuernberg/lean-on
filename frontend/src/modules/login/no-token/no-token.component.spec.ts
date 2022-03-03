import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoTokenComponent } from './no-token.component';

describe('NoTokenComponent', () => {
  let component: NoTokenComponent;
  let fixture: ComponentFixture<NoTokenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoTokenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
