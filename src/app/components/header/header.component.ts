import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @ViewChild('navList') navList!: ElementRef;

  constructor() {}

  toggleMenu() {
    this.navList.nativeElement.classList.toggle('left-0');
  }
}
