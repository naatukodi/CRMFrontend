import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-chicken-farming',
  standalone: true,
  templateUrl: './chicken-farming.component.html',
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
  ],
  styleUrls: ['./chicken-farming.component.css'],
})
export class ChickenFarmingComponent {
  formData: any = {};

  constructor(private http: HttpClient) { }

  onSubmit() {
    console.log('Form Data:', this.formData);
    this.http.post('https://your-api-endpoint/api/chicken-farming/register', this.formData).subscribe({
      next: (response) => {
        alert('Chicken Farming Registered Successfully!');
      },
      error: (error) => {
        alert('Failed to register chicken farming.');
      },
    });
  }

  onSubmitFeedback(feedbackData: any) {
    this.http.post('https://your-api-endpoint/api/chicken-farming/feedback', feedbackData).subscribe({
      next: (response) => {
        alert('Feedback Submitted Successfully!');
      },
      error: (error) => {
        alert('Failed to submit feedback.');
      },
    });
  }
}