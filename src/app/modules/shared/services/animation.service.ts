import { ElementRef, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AnimationService {
  constructor(private window: Window) {}

  checkElementVisibility(elementRef: ElementRef): boolean {
    const element = elementRef.nativeElement as HTMLElement;
    return element.offsetTop < this.window.scrollY + this.window.innerHeight;
  }

  toggleAnimationClasses(elementRef: ElementRef, ...classes: string[]): void {
    const element = elementRef.nativeElement as HTMLElement;
    classes.forEach((c) => element.classList.toggle(c));
  }
}
