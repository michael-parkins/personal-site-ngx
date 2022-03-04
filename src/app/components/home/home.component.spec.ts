import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let spectator: Spectator<HomeComponent>;
  const createComponent = createComponentFactory({
    component: HomeComponent,
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
  });
  beforeEach(() => (spectator = createComponent()));

  it('should exist', () => {
    expect(spectator.component).toBeDefined();
  });
});
