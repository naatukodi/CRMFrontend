import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerQuestionnaireComponent } from './farmer-questionnaire.component';

describe('FarmerQuestionnaireComponent', () => {
  let component: FarmerQuestionnaireComponent;
  let fixture: ComponentFixture<FarmerQuestionnaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FarmerQuestionnaireComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FarmerQuestionnaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
