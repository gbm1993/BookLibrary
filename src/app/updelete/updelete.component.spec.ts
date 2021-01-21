import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdeleteComponent } from './updelete.component';

describe('UpdeleteComponent', () => {
  let component: UpdeleteComponent;
  let fixture: ComponentFixture<UpdeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
