import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Spectator, createComponentFactory, createSpyObject, SpyObject } from '@ngneat/spectator';
import { AnimationService } from 'src/app/services/animation.service';
import { SlideInComponent } from './slide-in.component';

describe('SlideInComponent', () => {
  let spectator: Spectator<SlideInComponent>;
  const createComponent = createComponentFactory({
    component: SlideInComponent,
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
  });
  let animationService: SpyObject<AnimationService>;

  beforeEach(() => (animationService = createSpyObject(AnimationService)));

  it('should check visibility after init', () => {
    spectator = createComponent({
      providers: [{ provide: AnimationService, useValue: animationService }],
    });
    expect(animationService.checkElementVisibility).toHaveBeenCalled();
  });

  it('should check visibility on scroll', () => {
    spectator = createComponent({
      providers: [{ provide: AnimationService, useValue: animationService }],
    });
    window.dispatchEvent(new Event('scroll'));
    expect(animationService.checkElementVisibility).toHaveBeenCalledTimes(2);
  });

  it('should animate if visibile and has not animated before', () => {
    animationService.checkElementVisibility.andReturn(true);
    spectator = createComponent({
      providers: [{ provide: AnimationService, useValue: animationService }],
    });
    expect(animationService.toggleAnimationClasses).toHaveBeenCalled();
  });

  it('should not animate if visibile and has animated before', () => {
    animationService.checkElementVisibility.andReturn(true);
    spectator = createComponent({
      providers: [{ provide: AnimationService, useValue: animationService }],
    });
    window.dispatchEvent(new Event('scroll'));
    expect(animationService.toggleAnimationClasses).toHaveBeenCalledTimes(1);
  });

  it('should not animate if not visibile', () => {
    animationService.checkElementVisibility.andReturn(false);
    spectator = createComponent({
      providers: [{ provide: AnimationService, useValue: animationService }],
    });
    expect(animationService.toggleAnimationClasses).not.toHaveBeenCalled();
  });
});
