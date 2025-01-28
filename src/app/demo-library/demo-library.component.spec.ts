import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoLibraryComponent } from './demo-library.component';

describe('DemoLibraryComponent', () => {
  let component: DemoLibraryComponent;
  let fixture: ComponentFixture<DemoLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoLibraryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
