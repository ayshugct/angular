import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkOverlayComponent } from './link-overlay.component';

describe('LinkOverlayComponent', () => {
  let component: LinkOverlayComponent;
  let fixture: ComponentFixture<LinkOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinkOverlayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
