import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceUploadComponent } from './device-upload.component';

describe('DeviceUploadComponent', () => {
  let component: DeviceUploadComponent;
  let fixture: ComponentFixture<DeviceUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeviceUploadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
