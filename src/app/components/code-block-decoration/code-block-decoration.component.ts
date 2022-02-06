import { AfterViewInit, Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-code-block-decoration',
  templateUrl: './code-block-decoration.component.html',
  styleUrls: ['./code-block-decoration.component.scss'],
})
export class CodeBlockDecorationComponent implements OnInit, AfterViewInit {
  @Input() methodName = '';
  @Input() params!: string[];
  @Input() returnType = '';
  method = '';
  animated = false;

  @ViewChild('codeBlock') codeBlockRef!: ElementRef;

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    const scrollPosition = window.pageYOffset + window.innerHeight;

    if (this.checkVisibility() && !this.animated) {
      this.addAnimationClass();
    }
  }

  constructor(private window: Window) {}

  ngOnInit(): void {
    const paramsText = this.params ? this.params.join(', ') : '';
    this.method = `${this.methodName}(${paramsText})${this.returnType ? ': ' + this.returnType : ''} {`;
  }

  ngAfterViewInit(): void {
    if (this.checkVisibility() && !this.animated) {
      this.addAnimationClass();
    }
  }

  checkVisibility(): boolean {
    return (this.codeBlockRef.nativeElement as HTMLElement).offsetTop < this.window.scrollY + this.window.innerHeight;
  }

  addAnimationClass(): void {
    (this.codeBlockRef.nativeElement as HTMLElement).classList.add('write');
  }
}
