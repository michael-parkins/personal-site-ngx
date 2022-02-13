import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
})
export class LinkComponent {
  @Input() href = '';
  @Input() external = false;
}
