import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { ContactComponent } from './contact.component';

describe('ContactComponent', () => {
  let spectator: Spectator<ContactComponent>;
  const createComponent = createComponentFactory({
    component: ContactComponent,
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
  });
  beforeEach(() => (spectator = createComponent()));

  it('should render', () => {
    expect(spectator.query('h2')?.textContent).toEqual('Get in touch');
  });
});
