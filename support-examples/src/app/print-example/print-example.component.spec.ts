import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintExampleComponent } from './print-example.component';

describe('PrintExampleComponent', () => {
  let component: PrintExampleComponent;
  let fixture: ComponentFixture<PrintExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrintExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrintExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
