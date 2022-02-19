import { Spectator, createComponentFactory, createSpyObject, SpyObject } from '@ngneat/spectator';
import { AnimationService } from 'src/app/services/animation.service';
import { SlideInComponent } from './slide-in.component';

describe('SlideInComponent', () => {
  let spectator: Spectator<SlideInComponent>;
  const createComponent = createComponentFactory(SlideInComponent);
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
});
