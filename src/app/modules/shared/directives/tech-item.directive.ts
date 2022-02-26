import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appTechItem]',
})
export class TechItemDirective {
  @HostBinding('class') classList = 'flex w-1/3 flex-col items-center py-6 md:w-1/4 lg:w-1/6';
}
