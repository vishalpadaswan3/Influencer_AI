import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateresponseComponent } from './generateresponse.component';

describe('GenerateresponseComponent', () => {
  let component: GenerateresponseComponent;
  let fixture: ComponentFixture<GenerateresponseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenerateresponseComponent]
    });
    fixture = TestBed.createComponent(GenerateresponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
