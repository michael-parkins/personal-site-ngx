import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadInComponent } from './load-in.component';

xdescribe('LoadInComponent', () => {
  let component: LoadInComponent;
  let fixture: ComponentFixture<LoadInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoadInComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
