import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { ProjectsComponent } from './projects.component';

describe('ProjectsComponent', () => {
  let spectator: Spectator<ProjectsComponent>;
  const createComponent = createComponentFactory({
    component: ProjectsComponent,
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
  });
  beforeEach(() => (spectator = createComponent()));

  it('should exist', () => {
    expect(spectator.component).toBeDefined();
  });
});
