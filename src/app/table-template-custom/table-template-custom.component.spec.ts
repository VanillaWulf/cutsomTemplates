import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableTemplateCustomComponent } from './table-template-custom.component';

describe('TableTemplateCustomComponent', () => {
  let component: TableTemplateCustomComponent;
  let fixture: ComponentFixture<TableTemplateCustomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableTemplateCustomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableTemplateCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
