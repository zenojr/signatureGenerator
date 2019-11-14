import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignatureHtmloutComponent } from './signature-htmlout.component';

describe('SignatureHtmloutComponent', () => {
  let component: SignatureHtmloutComponent;
  let fixture: ComponentFixture<SignatureHtmloutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignatureHtmloutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignatureHtmloutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
