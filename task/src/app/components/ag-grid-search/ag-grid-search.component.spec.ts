import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgGridSearchComponent } from './ag-grid-search.component';

describe('AgGridSearchComponent', () => {
  let component: AgGridSearchComponent;
  let fixture: ComponentFixture<AgGridSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgGridSearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgGridSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
