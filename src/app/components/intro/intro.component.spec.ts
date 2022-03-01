import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Spectator, createComponentFactory, SpyObject, createSpyObject } from '@ngneat/spectator';
import { AnimationService } from 'src/app/modules/shared/services/animation.service';
import { IntroComponent } from './intro.component';

describe('IntroComponent', () => {
  let spectator: Spectator<IntroComponent>;
  const createComponent = createComponentFactory({
    component: IntroComponent,
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
  });
  let animationService: SpyObject<AnimationService>;
  animationService = createSpyObject(AnimationService);

  beforeEach(
    () =>
      (spectator = createComponent({
        providers: [{ provide: AnimationService, useValue: animationService }],
      }))
  );

  it('should render', () => {
    expect(spectator.query('h1')?.textContent).toEqual(`Hi, I'm Michael,`);
  });
});
