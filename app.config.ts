import { Component } from '@angular/core';
import { FarmerQuestionnaireComponent } from './farmer-questionnaire/farmer-questionnaire.component';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FarmerQuestionnaireComponent],
  template: `<app-farmer-questionnaire></app-farmer-questionnaire>`,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent { }

export const appConfig = {
  providers: [importProvidersFrom(AppComponent), provideRouter([])],
};
