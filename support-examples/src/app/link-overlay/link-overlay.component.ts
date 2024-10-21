import { CommonModule } from '@angular/common';
import { Component, ChangeDetectorRef, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-link-overlay',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './link-overlay.component.html',
  styleUrl: './link-overlay.component.scss'
})
export class LinkOverlayComponent {

  title = 'support-examples';
  overlayImage: string = '';
  overlayImageText: string = '';
  showOverlay: boolean = false;
  overlayPosition = { top: '0px', left: '0px' }; // Position for the overlay
  leaveTimeout: any;

  links = [
    { text: 'Link 1', image: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png' },
    { text: 'Link 2', image: 'https://images.unsplash.com/photo-1512001851715-b49d7db57d4a?crop=entropy&cs=tinysrgb' },
    { text: 'Link 3', image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb' },
    { text: 'Link 4', image: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png' },
    { text: 'Link 5', image: 'https://images.unsplash.com/photo-1512001851715-b49d7db57d4a?crop=entropy&cs=tinysrgb' },
    { text: 'Link 6', image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb' },
    { text: 'Link 7', image: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png' },
    { text: 'Link 8', image: 'https://images.unsplash.com/photo-1512001851715-b49d7db57d4a?crop=entropy&cs=tinysrgb' },
    { text: 'Link 9', image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb' },
    { text: 'Link 10', image: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png' },
    { text: 'Link 11', image: 'https://images.unsplash.com/photo-1525326462068-9c4a4d7e69f2?crop=entropy&cs=tinysrgb' },
    { text: 'Link 12', image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb' },
    { text: 'Link 13', image: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png' },
    { text: 'Link 14', image: 'https://images.unsplash.com/photo-1525326462068-9c4a4d7e69f2?crop=entropy&cs=tinysrgb' },
    { text: 'Link 15', image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb' },
    { text: 'Link 16', image: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png' },
    { text: 'Link 17', image: 'https://images.unsplash.com/photo-1525326462068-9c4a4d7e69f2?crop=entropy&cs=tinysrgb' },
    { text: 'Link 18', image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb' },
    { text: 'LinSDfasdfasdfasdfasdk 19', image: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png' },
    { text: 'Link 20', image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb' },
    { text: 'Link 21', image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb' },
    { text: 'Link 22', image: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png' },
    { text: 'Linksdfasdfasdfasdf 23', image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb' },
    { text: 'Link 24', image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb' },
    { text: 'Link 38', image: 'https://images.unsplash.com/photo-1512001851715-b49d7db57d4a?crop=entropy&cs=tinysrgb' },
    { text: 'Link 39', image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb' },
    { text: 'Link 310', image: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png' },
    { text: 'Link 311', image: 'https://images.unsplash.com/photo-1525326462068-9c4a4d7e69f2?crop=entropy&cs=tinysrgb' },
    { text: 'Link 312', image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb' },
    { text: 'Link 313', image: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png' },
    { text: 'Link 134', image: 'https://images.unsplash.com/photo-1525326462068-9c4a4d7e69f2?crop=entropy&cs=tinysrgb' },
    { text: 'Link 315', image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb' },
    { text: 'Link 316', image: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png' },
    { text: 'Link 317', image: 'https://images.unsplash.com/photo-1525326462068-9c4a4d7e69f2?crop=entropy&cs=tinysrgb' },
    { text: 'Link 318', image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb' },
    { text: 'LinSDfasdfasdfasdfasdk 319', image: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png' },
    { text: 'Link 320', image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb' },
    { text: 'Link 321', image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb' },
    { text: 'Link 322', image: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png' },
    { text: 'Linksdfasdfasdfasdf 323', image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb' },
    { text: 'Link 324', image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb' },
    // Add more links as needed
  ];

  constructor(private cdr: ChangeDetectorRef,
    private renderer: Renderer2,
    private router: Router) { }

  ngOnInit() { }



  private scrollListener!: () => void;

  ngAfterViewInit(): void {
    // this.observerCallbackFunction();
    this.scrollListener = this.renderer.listen('window', 'scroll', this.onWindowScroll.bind(this));
  }

  onWindowScroll(): void {
    if (this.showOverlay) {
      // Hide the overlay on scroll
      this.hideOverlay();
    }
  }

  @ViewChild('target') target!: ElementRef<HTMLDivElement>; // Reference to the target element

  ngOnDestroy(): void {
    // Clean up the event listener
    if (this.scrollListener) {
      this.scrollListener();
    }
  }

  debouncedMouseEnter = this.debounce((index: number, image: string, text: string, event: MouseEvent) => {
    this.overlayImage = image;
    this.overlayImageText = text;
    this.showOverlay = true;

    const mouseX = event.clientX;
    const mouseY = event.clientY;

    this.overlayPosition.top = `${mouseY - 20}px`;
    this.overlayPosition.left = `${mouseX + 10}px`;

    this.positionOverlay(event);
    this.scrollListener = this.renderer.listen('window', 'scroll', this.onWindowScroll.bind(this));
    this.cdr.detectChanges();
  }, 0);

  positionOverlay(event: MouseEvent) {
    const linkElement = event.target as HTMLElement
    const rect = linkElement.getBoundingClientRect();
    const overlayHeight = 200;
    const spaceBelow = window.innerHeight - rect.bottom;
    const spaceAbove = rect.top;

    // Position overlay below or above the link based on available space
    if (spaceBelow >= overlayHeight) {
      this.overlayPosition.top = `${rect.bottom + window.scrollY - 20}px`; // Below the link
    } else {
      this.overlayPosition.top = `${rect.top + window.scrollY - overlayHeight - 10}px`; // Above the link
    }

  }

  onMouseLeave(event: MouseEvent) {
    // Use a longer timeout to help mitigate flickering
    this.leaveTimeout = setTimeout(() => {
      if (!this.isMouseOverOverlay(event)) {
        if (this.showOverlay) {
          this.hideOverlay();
        }
      }
    }, 100); // Increase the delay
  }

  hideOverlay() {
    this.showOverlay = false;
    this.overlayImage = '';
    this.overlayImageText = '';
    this.scrollListener();
    this.cdr.detectChanges();
  }
  onMouseEnterOverlay(event: MouseEvent) {
    this.onMouseLeave(event);
    clearTimeout(this.leaveTimeout); // Clear timeout if mouse enters overlay
  }

  isMouseOverOverlay(event: MouseEvent): boolean {
    const overlayElement = document.querySelector('.overlay') as HTMLElement;
    if (!overlayElement) return false;

    const rect = overlayElement.getBoundingClientRect();
    const mouseX = event.clientX; // Get the mouse X position
    const mouseY = event.clientY; // Get the mouse Y position

    // Check if mouse is over the overlay
    return (
      mouseX >= rect.left &&
      mouseX <= rect.right &&
      mouseY >= rect.top &&
      mouseY <= rect.bottom
    );
  }

  debounce(func: (...args: any[]) => void, wait: number) {
    let timeout: any;
    return (...args: any[]) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  }
}
