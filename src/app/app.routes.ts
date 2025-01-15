import { Routes } from '@angular/router';
import { FarmerQuestionnaireComponent } from './farmer-questionnaire/farmer-questionnaire.component';
import { BusinessFeedbackComponent } from './business-feedback/business-feedback.component';

export const routes: Routes = [
  { path: '', redirectTo: 'questionnaire', pathMatch: 'full' },
  { path: 'questionnaire', component: FarmerQuestionnaireComponent },
  { path: 'businessfeedback', component: BusinessFeedbackComponent },
];
