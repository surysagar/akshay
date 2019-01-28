import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileRetriggerComponent } from './file-retrigger.component';

describe('FileRetriggerComponent', () => {
  let component: FileRetriggerComponent;
  let fixture: ComponentFixture<FileRetriggerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileRetriggerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileRetriggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
