import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Spectator, createComponentFactory, createSpyObject } from '@ngneat/spectator';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let spectator: Spectator<HeaderComponent>;
  const doc = createSpyObject(Document);
  const createComponent = createComponentFactory({
    component: HeaderComponent,
    providers: [{ provide: Document, useValue: doc }],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
  });
  beforeEach(() => (spectator = createComponent()));

  it('should exist', () => {
    expect(spectator.component).toBeDefined();
  });
});
