import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PicsumdetailsComponent } from './picsumdetails.component';

describe('PicsumdetailsComponent', () => {
  let component: PicsumdetailsComponent;
  let fixture: ComponentFixture<PicsumdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PicsumdetailsComponent]
    });
    fixture = TestBed.createComponent(PicsumdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
