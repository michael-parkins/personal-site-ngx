import { Component } from '@angular/core';
import { Social } from 'src/models/social.interface';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  socials: Social[] = [
    {
      name: 'Github',
      icon: 'github',
      url: 'https://github.com/michael-parkins',
    },
    {
      name: 'Twitter',
      icon: 'twitter',
      url: 'https://twitter.com/d00dparkins',
    },
    {
      name: 'Dev.to',
      icon: 'dev-to',
      url: 'https://dev.to/michaelparkins',
    },
    {
      name: 'LinkedIn',
      icon: 'linkedin',
      url: 'https://www.linkedin.com/in/michael-parkins/',
    },
  ];

  constructor() {}
}
