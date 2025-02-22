import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CafeSysComponent } from './cafe-sys.component';

describe('CafeSysComponent', () => {
  let component: CafeSysComponent;
  let fixture: ComponentFixture<CafeSysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CafeSysComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CafeSysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
