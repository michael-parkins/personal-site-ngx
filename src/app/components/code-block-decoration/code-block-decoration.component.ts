import { AfterViewInit, Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { AnimationService } from 'src/app/services/animation.service';

@Component({
  selector: 'app-code-block-decoration',
  templateUrl: './code-block-decoration.component.html',
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
    this.animate();
  }

  constructor(private animationService: AnimationService) {}

  ngOnInit(): void {
    const paramsText = this.params ? this.params.join(', ') : '';
    this.method = `${this.methodName}(${paramsText})${this.returnType ? ': ' + this.returnType : ''} {`;
  }

  // Required when screen is not scrolled and element is already visible
  ngAfterViewInit(): void {
    this.animate();
  }

  animate(): void {
    if (this.animationService.checkElementVisibility(this.codeBlockRef) && !this.animated) {
      this.animated = true;
      this.animationService.toggleAnimationClasses(this.codeBlockRef, 'w-0', 'w-full');
    }
  }
}
