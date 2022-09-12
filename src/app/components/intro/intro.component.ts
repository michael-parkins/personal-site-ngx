import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { AnimationService } from 'src/app/modules/shared/services/animation.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
})
export class IntroComponent implements AfterViewInit, OnDestroy {
  @ViewChild('personalList') personalListRef!: ElementRef;
  personalList = [
    'father',
    'gamer',
    'LEGO builder',
    'Star Wars fan',
    'ramen fan',
    'MCU super fan',
    'bushcraft geek',
  ].sort(() => 0.5 - Math.random());
  intervalId: ReturnType<typeof setInterval> | undefined;
  activeIndex = 0;

  constructor(private animationService: AnimationService) {}

  ngAfterViewInit(): void {
    this.createInterval();
    this.initText();
    this.executeAnimationSteps();
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  initText() {
    this.iterateText();
  }

  createInterval() {
    this.intervalId = setInterval(() => {
      this.executeAnimationSteps();
    }, 4000);
  }

  executeAnimationSteps() {
    this.animate();
    setTimeout(() => {
      this.animate();
    }, 2500);
    setTimeout(() => {
      this.iterateText();
    }, 3500);
  }

  animate(): void {
    this.animationService.toggleAnimationClasses(this.personalListRef, 'w-0', 'w-3/4');
  }

  iterateText() {
    this.personalListRef.nativeElement.textContent = this.personalList[this.activeIndex] + '.';
    this.activeIndex < this.personalList.length - 1 ? this.activeIndex++ : (this.activeIndex = 0);
  }
}
