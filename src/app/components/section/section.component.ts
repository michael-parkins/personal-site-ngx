import { Component, Input } from '@angular/core';
import { CodeBlock } from 'src/models/code-block.interface';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
})
export class SectionComponent {
  @Input() header = '';
  @Input() codeBlock: CodeBlock | undefined;
  @Input() marginBottom = false;
  @Input() fullScreen = false;
}
