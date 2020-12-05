import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pesquisa2Component } from './pesquisa2.component';

describe('Pesquisa2Component', () => {
  let component: Pesquisa2Component;
  let fixture: ComponentFixture<Pesquisa2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pesquisa2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pesquisa2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
