import { createDirectiveFactory, SpectatorDirective } from '@ngneat/spectator';
import { TechItemDirective } from './tech-item.directive';

describe('TechItemDirective', () => {
  let spectator: SpectatorDirective<TechItemDirective>;
  const createDirective = createDirectiveFactory(TechItemDirective);

  beforeEach(() => {
    spectator = createDirective(`<div appTechItem>Directive</div>`);
  });

  it('should exist', () => {
    const instance = spectator.directive;
    expect(instance).toBeDefined();
  });

  it('should add classes', () => {
    expect(spectator.element).toHaveClass('flex');
  });
});
