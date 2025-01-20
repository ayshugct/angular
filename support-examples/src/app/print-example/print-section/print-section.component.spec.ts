import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintSectionComponent } from './print-section.component';

describe('PrintSectionComponent', () => {
  let component: PrintSectionComponent;
  let fixture: ComponentFixture<PrintSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrintSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrintSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
