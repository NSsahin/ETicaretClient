import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutcsComponent } from './produtcs.component';

describe('ProdutcsComponent', () => {
  let component: ProdutcsComponent;
  let fixture: ComponentFixture<ProdutcsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdutcsComponent]
    });
    fixture = TestBed.createComponent(ProdutcsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
