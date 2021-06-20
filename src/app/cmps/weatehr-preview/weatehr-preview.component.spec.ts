import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatehrPreviewComponent } from './weatehr-preview.component';

describe('WeatehrPreviewComponent', () => {
  let component: WeatehrPreviewComponent;
  let fixture: ComponentFixture<WeatehrPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatehrPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatehrPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
