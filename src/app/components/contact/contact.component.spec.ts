import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Spectator, createComponentFactory, createSpyObject } from '@ngneat/spectator';
import { ContactComponent } from './contact.component';

describe('ContactComponent', () => {
  let spectator: Spectator<ContactComponent>;
  const createComponent = createComponentFactory({
    component: ContactComponent,
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
  });

  it('should render', () => {
    const route = createSpyObject(ActivatedRoute, { snapshot: { routeConfig: { path: '' } } });
    spectator = createComponent({
      providers: [{ provide: ActivatedRoute, useValue: route }],
    });

    expect(spectator.query('app-section')).toBeTruthy();
  });

  it('should expand section full screen when on the contact route', () => {
    const route = createSpyObject(ActivatedRoute, { snapshot: { routeConfig: { path: 'contact' } } });
    spectator = createComponent({
      providers: [{ provide: ActivatedRoute, useValue: route }],
    });

    expect(spectator.component.expandFullScreen).toBeTrue();
  });

  it('should not expand section full screen when on the other route', () => {
    const route = createSpyObject(ActivatedRoute, { snapshot: { routeConfig: { path: 'home' } } });
    spectator = createComponent({
      providers: [{ provide: ActivatedRoute, useValue: route }],
    });

    expect(spectator.component.expandFullScreen).toBeFalse();
  });
});
