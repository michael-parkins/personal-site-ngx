import { NgModule } from '@angular/core';
import { CodeBlockDecorationComponent } from './components/code-block-decoration/code-block-decoration.component';
import { LinkComponent } from './components/link/link.component';
import { SlideInComponent } from './components/slide-in/slide-in.component';
import { SectionComponent } from './components/section/section.component';
import { BrowserModule } from '@angular/platform-browser';
import { TechItemDirective } from './directives/tech-item.directive';

@NgModule({
  declarations: [CodeBlockDecorationComponent, LinkComponent, SlideInComponent, SectionComponent, TechItemDirective],
  imports: [BrowserModule],
  exports: [
    CodeBlockDecorationComponent,
    LinkComponent,
    SlideInComponent,
    SectionComponent,
    BrowserModule,
    TechItemDirective,
  ],
})
export class SharedModule {}
