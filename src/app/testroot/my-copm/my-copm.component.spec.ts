import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCopmComponent } from './my-copm.component';

describe('MyCopmComponent', () => {
  let component: MyCopmComponent;
  let fixture: ComponentFixture<MyCopmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCopmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCopmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
