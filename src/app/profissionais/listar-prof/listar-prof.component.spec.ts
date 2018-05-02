import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarProfComponent } from './listar-prof.component';

describe('ListarProfComponent', () => {
  let component: ListarProfComponent;
  let fixture: ComponentFixture<ListarProfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarProfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarProfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
