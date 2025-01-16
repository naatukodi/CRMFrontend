import { Routes } from '@angular/router';
import { FarmerQuestionnaireComponent } from './farmer-questionnaire/farmer-questionnaire.component';
import { BusinessQuestionnaireComponent } from './business-questionnaire/business-questionnaire.component';
import { BusinessRegistrationComponent } from './business-registration/business-registration.component';
import { FarmerRegistrationComponent } from './farmer-registration/farmer-registration.component';

export const routes: Routes = [
  { path: '', redirectTo: 'farmersurvey', pathMatch: 'full' },
  { path: 'farmersurvey', component: FarmerQuestionnaireComponent },
  { path: 'businesssurvey', component: BusinessQuestionnaireComponent },
  { path: 'businessregistration', component: BusinessRegistrationComponent },
  { path: 'farmerregistration', component: FarmerRegistrationComponent },
];
