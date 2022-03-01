import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { AnimationService } from 'src/app/modules/shared/services/animation.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
})
export class IntroComponent implements AfterViewInit, OnDestroy {
  @ViewChild('personalList') personalListRef!: ElementRef;
  personalList = ['husband', 'father', 'LEGO builder', 'MCU super fan'];
  intervalId: ReturnType<typeof setInterval> | undefined;
  activeIndex = 0;

  constructor(private animationService: AnimationService) {}

  ngAfterViewInit(): void {
    this.iterateText();
    this.animate();
    setTimeout(() => {
      this.animate();
    }, 3500);

    this.intervalId = setInterval(() => {
      this.animate();
      setTimeout(() => {
        this.animate();
      }, 2500);
      setTimeout(() => {
        this.iterateText();
      }, 3500);
    }, 4000);
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  animate(): void {
    this.animationService.toggleAnimationClasses(this.personalListRef, 'w-0', 'w-3/4');
  }

  iterateText() {
    this.personalListRef.nativeElement.textContent = this.personalList[this.activeIndex];
    this.activeIndex < this.personalList.length - 1 ? this.activeIndex++ : (this.activeIndex = 0);
  }
}
