import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagContactoComponent } from './pag-contacto.component';

describe('PagContactoComponent', () => {
  let component: PagContactoComponent;
  let fixture: ComponentFixture<PagContactoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagContactoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
