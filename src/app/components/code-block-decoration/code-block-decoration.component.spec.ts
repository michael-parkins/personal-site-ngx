import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeBlockDecorationComponent } from './code-block-decoration.component';

xdescribe('CodeBlockDecorationComponent', () => {
  let component: CodeBlockDecorationComponent;
  let fixture: ComponentFixture<CodeBlockDecorationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CodeBlockDecorationComponent],
      providers: [],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeBlockDecorationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
