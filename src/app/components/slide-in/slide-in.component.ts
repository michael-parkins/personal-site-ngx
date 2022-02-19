import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-slide-in',
  templateUrl: './slide-in.component.html',
})
export class SlideInComponent {
  @ViewChild('slideIn') slideInRef!: ElementRef;
  @ViewChild('wrapper') wrapperRef!: ElementRef;
  animated = false;

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    const scrollPosition = window.pageYOffset + window.innerHeight;

    if (this.checkVisibility() && !this.animated) {
      this.animated = true;
      this.addAnimationClass();
    }
  }

  constructor(private window: Window) {}

  checkVisibility(): boolean {
    return (this.wrapperRef.nativeElement as HTMLElement).offsetTop < this.window.scrollY + this.window.innerHeight;
  }

  addAnimationClass(): void {
    (this.slideInRef.nativeElement as HTMLElement).classList.toggle('-left-full');
    (this.slideInRef.nativeElement as HTMLElement).classList.toggle('left-0');
    (this.slideInRef.nativeElement as HTMLElement).classList.toggle('opacity-0');
    (this.slideInRef.nativeElement as HTMLElement).classList.toggle('opacity-100');
  }
}
