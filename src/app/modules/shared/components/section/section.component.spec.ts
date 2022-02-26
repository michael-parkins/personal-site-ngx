import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { SectionComponent } from './section.component';

describe('SectionComponent', () => {
  let spectator: Spectator<SectionComponent>;
  const createComponent = createComponentFactory({
    component: SectionComponent,
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
  });
  beforeEach(() => (spectator = createComponent()));

  it('should render header from input', () => {
    spectator.setInput('header', 'Test');
    expect(spectator.query('h2')?.textContent).toEqual('Test');
  });
});
