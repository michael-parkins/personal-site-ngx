import { NgModule } from '@angular/core';
import { CodeBlockDecorationComponent } from './components/code-block-decoration/code-block-decoration.component';
import { LinkComponent } from './components/link/link.component';
import { SlideInComponent } from './components/slide-in/slide-in.component';
import { SectionComponent } from './components/section/section.component';
import { BrowserModule } from '@angular/platform-browser';
import { TechItemDirective } from './directives/tech-item.directive';
import { ButtonComponent } from './components/button/button.component';
import { ToggleButtonComponent } from './components/tab-button/toggle-button.component';

@NgModule({
  declarations: [
    ButtonComponent,
    CodeBlockDecorationComponent,
    LinkComponent,
    SlideInComponent,
    SectionComponent,
    TechItemDirective,
    ButtonComponent,
    ToggleButtonComponent,
  ],
  imports: [BrowserModule],
  exports: [
    ButtonComponent,
    CodeBlockDecorationComponent,
    LinkComponent,
    SlideInComponent,
    SectionComponent,
    BrowserModule,
    TechItemDirective,
    ToggleButtonComponent,
  ],
})
export class SharedModule {}
