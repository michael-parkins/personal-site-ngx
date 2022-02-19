import { ElementRef } from '@angular/core';
import { createServiceFactory, createSpyObject, SpectatorService } from '@ngneat/spectator';
import { AnimationService } from './animation.service';

describe('AnimationService', () => {
  let spectator: SpectatorService<AnimationService>;
  const createService = createServiceFactory(AnimationService);
  const window = createSpyObject(Window);
  beforeEach(
    () =>
      (spectator = createService({
        providers: [{ provide: Window, useValue: window }],
      }))
  );

  describe('toggleAnimationClasses()', () => {
    it('toggle class on an element', () => {
      const elementRef = new ElementRef<HTMLElement>(document.createElement('div'));
      spectator.service.toggleAnimationClasses(elementRef, 'one');
      expect((elementRef.nativeElement as HTMLElement).classList.contains('one')).toBeTrue();
    });

    it('toggle multiple classes on an element', () => {
      const elementRef = new ElementRef<HTMLElement>(document.createElement('div'));
      spectator.service.toggleAnimationClasses(elementRef, 'one', 'two');
      expect((elementRef.nativeElement as HTMLElement).classList.contains('one')).toBeTrue();
      expect((elementRef.nativeElement as HTMLElement).classList.contains('two')).toBeTrue();
    });

    it('toggle class off an element', () => {
      const elementRef = new ElementRef<HTMLElement>(document.createElement('div'));
      elementRef.nativeElement.classList.add('one');
      spectator.service.toggleAnimationClasses(elementRef, 'one');
      expect((elementRef.nativeElement as HTMLElement).classList.contains('one')).toBeFalse();
    });
  });
});
