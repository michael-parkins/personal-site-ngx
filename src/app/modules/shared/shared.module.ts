import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeBlockDecorationComponent } from './components/code-block-decoration/code-block-decoration.component';
import { LinkComponent } from './components/link/link.component';
import { SlideInComponent } from './components/slide-in/slide-in.component';
import { SectionComponent } from './components/section/section.component';

@NgModule({
  declarations: [CodeBlockDecorationComponent, LinkComponent, SlideInComponent, SectionComponent],
  imports: [CommonModule],
  exports: [CodeBlockDecorationComponent, LinkComponent, SlideInComponent, SectionComponent, CommonModule],
})
export class SharedModule {}
