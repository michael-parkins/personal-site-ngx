import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { TechComponent } from './tech.component';

describe('TechComponent', () => {
  let spectator: Spectator<TechComponent>;
  const createComponent = createComponentFactory({
    component: TechComponent,
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
  });
  beforeEach(() => (spectator = createComponent()));

  it('should render', () => {
    expect(spectator.query('h2')?.textContent).toEqual('My toolbelt');
  });
});
