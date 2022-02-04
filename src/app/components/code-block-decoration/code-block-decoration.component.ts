import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-code-block-decoration',
  templateUrl: './code-block-decoration.component.html',
  styleUrls: ['./code-block-decoration.component.scss'],
})
export class CodeBlockDecorationComponent implements OnInit {
  @Input() methodName = '';
  @Input() params!: string[];
  @Input() returnType = '';
  method = '';

  ngOnInit(): void {
    const paramsText = this.params ? this.params.join(', ') : '';
    this.method = `${this.methodName}(${paramsText})${this.returnType ? ': ' + this.returnType : ''} {`;
  }
}
