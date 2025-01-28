import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-farmer-registration',
  standalone: true,
  templateUrl: './farmer-registration.component.html',
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
  ],
  styleUrls: ['./farmer-registration.component.css'],
})
export class FarmerRegistrationComponent implements OnInit {
  formData: any = {
    customerId: '',
    fullName: '',
    phoneOrEmail: '',
  };

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.formData.fullName = params['name'] || '';
      this.formData.phoneOrEmail = params['phone'] || '';
      
      // Generate a unique customer ID
      this.formData.customerId = this.generateCustomerId(this.formData.phoneOrEmail);
    });
  }

  generateCustomerId(phoneNumber: string): string {
    return 'FARM' + phoneNumber.slice(-4) + '-' + new Date().getTime(); // Example: FARM1234-1706123456789
  }

  onSubmit() {
    console.log('Form Data:', this.formData);
    this.http.post('https://naatukodiappservice.azurewebsites.net/api/FarmerRegistration', this.formData).subscribe({
      next: (response) => {
        alert('Farmer Registered Successfully!');
        console.log('Response:', response);
      },
      error: (error) => {
        alert('Failed to register farmer. Please try again.');
        console.error('Error:', error);
      },
    });
  }
}