import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { IntroComponent } from './intro.component';

xdescribe('IntroComponent', () => {
  let spectator: Spectator<IntroComponent>;
  const createComponent = createComponentFactory({
    component: IntroComponent,
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
  });
  beforeEach(() => (spectator = createComponent()));

  it('should render', () => {
    expect(spectator.query('h1')?.textContent).toEqual(`Hi, I'm Michael,`);
  });
});
