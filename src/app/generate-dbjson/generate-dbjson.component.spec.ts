import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateDbjsonComponent } from './generate-dbjson.component';

describe('GenerateDbjsonComponent', () => {
  let component: GenerateDbjsonComponent;
  let fixture: ComponentFixture<GenerateDbjsonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerateDbjsonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateDbjsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
