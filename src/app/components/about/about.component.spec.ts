import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { AboutComponent } from './about.component';

describe('AboutComponent', () => {
  let spectator: Spectator<AboutComponent>;
  const createComponent = createComponentFactory(AboutComponent);

  beforeEach(() => (spectator = createComponent()));

  it('should render', () => {
    expect(spectator.query('h2')?.textContent).toEqual('About me');
  });
});
