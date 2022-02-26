import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { LinkComponent } from './link.component';

describe('LinkComponent', () => {
  let spectator: Spectator<LinkComponent>;
  const createComponent = createComponentFactory({
    component: LinkComponent,
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
  });
  beforeEach(
    () =>
      (spectator = createComponent({
        props: {
          href: 'some-url',
        },
      }))
  );

  it('should use input url', () => {
    expect(spectator.query('a')?.attributes.getNamedItem('href')?.value).toEqual('some-url');
  });
});
