import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataCollectionFormComponent } from './data-collection-form.component';

describe('DataCollectionFormComponent', () => {
  let component: DataCollectionFormComponent;
  let fixture: ComponentFixture<DataCollectionFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataCollectionFormComponent]
    });
    fixture = TestBed.createComponent(DataCollectionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
