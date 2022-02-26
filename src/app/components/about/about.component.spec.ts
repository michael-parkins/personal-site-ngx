import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Spectator, createComponentFactory, createSpyObject } from '@ngneat/spectator';
import { AboutComponent } from './about.component';

describe('AboutComponent', () => {
  let spectator: Spectator<AboutComponent>;
  const createComponent = createComponentFactory({
    component: AboutComponent,
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
  });

  it('should render', () => {
    const route = createSpyObject(ActivatedRoute, { snapshot: { routeConfig: { path: '' } } });
    spectator = createComponent({
      providers: [{ provide: ActivatedRoute, useValue: route }],
    });

    expect(spectator.query('app-section')).toBeTruthy();
  });

  it('should expand section full screen when on the about route', () => {
    const route = createSpyObject(ActivatedRoute, { snapshot: { routeConfig: { path: 'about' } } });
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
