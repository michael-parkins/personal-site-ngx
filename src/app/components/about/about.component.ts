import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
})
export class AboutComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  expandFullScreen = false;

  ngOnInit(): void {
    this.expandFullScreen = this.route.snapshot.routeConfig?.path === 'about';
  }
}
