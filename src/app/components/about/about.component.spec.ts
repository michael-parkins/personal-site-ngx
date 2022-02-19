import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { AboutComponent } from './about.component';

describe('AboutComponent', () => {
  let spectator: Spectator<AboutComponent>;
  const createComponent = createComponentFactory({
    component: AboutComponent,
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
  });

  beforeEach(() => (spectator = createComponent()));

  it('should render', () => {
    expect(spectator.query('h2')?.textContent).toEqual('About me');
  });
});
