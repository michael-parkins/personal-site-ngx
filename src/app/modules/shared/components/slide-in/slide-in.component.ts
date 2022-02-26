import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { AnimationService } from 'src/app/modules/shared/services/animation.service';

@Component({
  selector: 'app-slide-in',
  templateUrl: './slide-in.component.html',
})
export class SlideInComponent implements AfterViewInit {
  @ViewChild('slideIn') slideInRef!: ElementRef;
  @ViewChild('wrapper') wrapperRef!: ElementRef;
  animated = false;

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    this.animate();
  }

  constructor(private animationService: AnimationService) {}

  // Required when screen is not scrolled and element is already visible
  ngAfterViewInit(): void {
    this.animate();
  }

  animate(): void {
    if (this.animationService.checkElementVisibility(this.wrapperRef) && !this.animated) {
      this.animated = true;
      this.animationService.toggleAnimationClasses(this.slideInRef, '-left-full', 'left-0', 'opacity-0', 'opacity-100');
    }
  }
}
