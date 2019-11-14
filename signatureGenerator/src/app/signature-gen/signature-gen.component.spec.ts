import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignatureGenComponent } from './signature-gen.component';

describe('SignatureGenComponent', () => {
  let component: SignatureGenComponent;
  let fixture: ComponentFixture<SignatureGenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignatureGenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignatureGenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
