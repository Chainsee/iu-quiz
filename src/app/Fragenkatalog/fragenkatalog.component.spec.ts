import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FragenkatalogComponent } from './fragenkatalog.component';

describe('FragenkatalogComponent', () => {
  let component: FragenkatalogComponent;
  let fixture: ComponentFixture<FragenkatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FragenkatalogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FragenkatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
