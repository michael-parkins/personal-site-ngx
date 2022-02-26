import { ElementRef } from '@angular/core';
import { createServiceFactory, createSpyObject, SpectatorService, SpyObject } from '@ngneat/spectator';
import { AnimationService } from './animation.service';

describe('AnimationService', () => {
  let spectator: SpectatorService<AnimationService>;
  const createService = createServiceFactory(AnimationService);
  let window: SpyObject<Window>;

  describe('checkElementVisibility()', () => {
    it('should return true for visible element', () => {
      window = createSpyObject(Window, { scrollY: 1, innerHeight: 1 });
      spectator = createService({
        providers: [{ provide: Window, useValue: window }],
      });
      const elementRef = new ElementRef<HTMLElement>(document.createElement('div'));
      expect(spectator.service.checkElementVisibility(elementRef)).toBeTrue();
    });

    it('should return false for not visible element', () => {
      window = createSpyObject(Window, { scrollY: 0, innerHeight: -1 });
      spectator = createService({
        providers: [{ provide: Window, useValue: window }],
      });
      const elementRef = new ElementRef<HTMLElement>(document.createElement('div'));
      expect(spectator.service.checkElementVisibility(elementRef)).toBeFalse();
    });
  });

  describe('toggleAnimationClasses()', () => {
    beforeEach(() => {
      window = createSpyObject(Window);
      spectator = createService({
        providers: [{ provide: Window, useValue: window }],
      });
    });

    it('should toggle class on an element', () => {
      const elementRef = new ElementRef<HTMLElement>(document.createElement('div'));
      spectator.service.toggleAnimationClasses(elementRef, 'one');
      expect((elementRef.nativeElement as HTMLElement).classList.contains('one')).toBeTrue();
    });

    it('should toggle multiple classes on an element', () => {
      const elementRef = new ElementRef<HTMLElement>(document.createElement('div'));
      spectator.service.toggleAnimationClasses(elementRef, 'one', 'two');
      expect((elementRef.nativeElement as HTMLElement).classList.contains('one')).toBeTrue();
      expect((elementRef.nativeElement as HTMLElement).classList.contains('two')).toBeTrue();
    });

    it('should toggle class off an element', () => {
      const elementRef = new ElementRef<HTMLElement>(document.createElement('div'));
      elementRef.nativeElement.classList.add('one');
      spectator.service.toggleAnimationClasses(elementRef, 'one');
      expect((elementRef.nativeElement as HTMLElement).classList.contains('one')).toBeFalse();
    });
  });
});
