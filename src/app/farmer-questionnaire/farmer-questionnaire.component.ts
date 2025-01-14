import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-farmer-questionnaire',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule, // Use this instead of BrowserModule
  ],
  templateUrl: './farmer-questionnaire.component.html',
})
export class FarmerQuestionnaireComponent {
  formData: any = {};

  constructor(private http: HttpClient) { }

  onSubmit() {
    this.http
      .post('https://naatukodiappservice.azurewebsites.net/api/farmer/submit', this.formData)
      .subscribe({
        next: (response) => {
          alert('Questionnaire submitted successfully!');
          console.log(response);
        },
        error: (error) => {
          alert('Failed to submit the questionnaire. Please try again.');
          console.error(error);
        },
      });
  }
}