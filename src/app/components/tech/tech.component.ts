import { Component, OnInit } from '@angular/core';
import { Tech } from 'src/models/tech.interface';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
})
export class TechComponent {
  techs: Tech[] = [
    {
      name: 'Angular',
      icon: 'angular',
    },
    {
      name: 'Tailwind CSS',
      icon: 'tailwindcss',
    },
    {
      name: 'Node.js',
      icon: 'nodejs',
    },
    {
      name: 'RxJS',
      icon: 'rxjs',
    },
    {
      name: 'Redux',
      icon: 'redux',
    },
    {
      name: 'Typescript',
      icon: 'typescript',
    },
    {
      name: 'Sass',
      icon: 'sass',
    },
    {
      name: 'Playwright',
      icon: 'playwright',
    },
    {
      name: 'Jasmine',
      icon: 'jasmine',
    },
    {
      name: 'AWS',
      icon: 'aws',
    },
    {
      name: 'Git',
      icon: 'git',
    },
    {
      name: 'GitHub',
      icon: 'github',
    },
    {
      name: 'GitHub Actions',
      icon: 'github-actions',
    },
    {
      name: 'JavaScript',
      icon: 'javascript',
    },
    {
      name: 'CSS',
      icon: 'css',
    },
    {
      name: 'HTML',
      icon: 'html',
    },
  ];

  constructor() {}
}
