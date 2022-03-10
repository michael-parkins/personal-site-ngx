import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-toggle-button',
  templateUrl: './toggle-button.component.html',
})
export class ToggleButtonComponent implements OnInit {
  @Input() open = false;
  @Input() controlledElement: HTMLElement | undefined = undefined;
  @Output() openRef = new EventEmitter<HTMLElement>();
  controlledElementId: string | undefined = '';

  @HostListener('click', ['$event'])
  onClick(): void {
    this.open = !this.open;
    this.setAriaHidden(this.controlledElement);
    this.toggleElementVisibility(this.controlledElement);
  }

  ngOnInit(): void {
    this.controlledElementId = this.controlledElement?.id;
  }

  setAriaHidden(element: HTMLElement | undefined) {
    if (element) {
      const ariaHidden = element.attributes.getNamedItem('aria-hidden');
      if (ariaHidden) {
        ariaHidden.value = this.open ? 'false' : 'true';
      }
    }
  }

  toggleElementVisibility(element: HTMLElement | undefined) {
    if (element) {
      element.classList.toggle('hidden');
    }
  }
}
