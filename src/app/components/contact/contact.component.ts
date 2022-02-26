import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
})
export class ContactComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  expandFullScreen = false;

  ngOnInit(): void {
    this.expandFullScreen = this.route.snapshot.routeConfig?.path === 'contact';
  }
}
