import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PicsumComponent } from './picsum.component';

describe('PicsumComponent', () => {
  let component: PicsumComponent;
  let fixture: ComponentFixture<PicsumComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PicsumComponent]
    });
    fixture = TestBed.createComponent(PicsumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
