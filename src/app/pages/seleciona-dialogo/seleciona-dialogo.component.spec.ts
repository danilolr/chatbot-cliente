import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecionaDialogoComponent } from './seleciona-dialogo.component';

describe('SelecionaDialogoComponent', () => {
  let component: SelecionaDialogoComponent;
  let fixture: ComponentFixture<SelecionaDialogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelecionaDialogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelecionaDialogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
