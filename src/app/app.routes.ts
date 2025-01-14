import { Routes } from '@angular/router';
import { FarmerQuestionnaireComponent } from './farmer-questionnaire/farmer-questionnaire.component';

export const routes: Routes = [
  { path: '', redirectTo: 'questionnaire', pathMatch: 'full' },
  { path: 'questionnaire', component: FarmerQuestionnaireComponent },
];
