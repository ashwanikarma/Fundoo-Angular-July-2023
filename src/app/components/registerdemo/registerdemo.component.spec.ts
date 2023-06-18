import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterdemoComponent } from './registerdemo.component';

describe('RegisterdemoComponent', () => {
  let component: RegisterdemoComponent;
  let fixture: ComponentFixture<RegisterdemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterdemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
