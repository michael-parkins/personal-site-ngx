import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  @ViewChild('nav') navList!: ElementRef;

  constructor(private document: Document) {}

  toggleMenu() {
    const navElement = this.navList.nativeElement as HTMLElement;
    navElement.classList.toggle('fixed');
    navElement.classList.toggle('hidden');
    this.toggleScolling();
  }

  closeMenu() {
    const navElement = this.navList.nativeElement as HTMLElement;
    if (navElement.classList.contains('fixed')) {
      this.toggleMenu();
    }
  }

  toggleScolling() {
    this.document.body.classList.toggle('overflow-hidden');
  }
}
