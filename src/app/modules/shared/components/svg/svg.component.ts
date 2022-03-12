import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg',
  templateUrl: './svg.component.html',
})
export class SvgComponent implements OnInit {
  @Input() name = '';
  @Input() title = '';
  @Input() classList = '';
  url = '';

  constructor() {}

  ngOnInit(): void {
    this.url = `/assets/svg/${this.name}.svg#icon`;
  }
}
