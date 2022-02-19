import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Spectator, createComponentFactory, createSpyObject } from '@ngneat/spectator';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let spectator: Spectator<AppComponent>;
  const doc = createSpyObject(Document);
  const createComponent = createComponentFactory({
    component: AppComponent,
    providers: [{ provide: Document, useValue: doc }],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
  });
  beforeEach(() => (spectator = createComponent()));

  it('should set title', () => {
    expect(spectator.component.title).toEqual('Michael Parkins | Web Developer');
  });
});
