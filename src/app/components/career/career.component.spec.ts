import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { CareerComponent } from './career.component';

describe('CareerComponent', () => {
  let spectator: Spectator<CareerComponent>;
  const createComponent = createComponentFactory({
    component: CareerComponent,
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
  });
  beforeEach(() => (spectator = createComponent()));

  it('should exist', () => {
    expect(spectator.component).toBeDefined();
  });
});
