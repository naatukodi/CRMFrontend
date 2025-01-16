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
    HttpClientModule,
  ],
  templateUrl: './farmer-questionnaire.component.html',
})
export class FarmerQuestionnaireComponent {
  // Dropdown options
  rearingMethodOptions = ['Free-range', 'Farm-based', 'Others'];
  chickenCountOptions = ['0-50', '50-100', '100-500', 'More than 500'];
  monthlySalesOptions = ['0-50', '50-100', '100-500', 'More than 500'];

  // Multiple checkboxes
  feedMaterialOptions = ['Commercial feed', 'Wheat', 'Pulses', 'Others'];
  healthPracticesOptions = [
    'Disease prevention',
    'Regular health check-ups',
    'Vaccinations',
    'Others',
  ];
  sellingMethodOptions = [
    'Direct to consumer',
    'Wholesale',
    'Restaurants',
    'Others',
  ];
  vetSupportTypeOptions = [
    'Regular health check-ups',
    'Emergency care',
    'Vaccination programs',
  ];
  assistanceRequiredOptions = [
    'Feeding methods',
    'Disease prevention',
    'Marketing',
  ];

  // Initialize all fields from your JSON object.
  formData = {
    id: '',
    Type: 'FarmerQuestionnaire',
    CustomerId: '',
    Name: '',
    Location: '',
    ContactInfo: '',
    ChickenBreeds: '',
    RearingMethod: '',             // dropdown
    ChickenCount: '',              // dropdown
    MonthlySales: '',              // dropdown
    FeedMaterials: '',             // multiple checkbox => comma-separated
    HealthPractices: '',           // multiple checkbox => comma-separated
    HasVetAccess: false,
    SellingMethods: '',            // multiple checkbox => comma-separated
    SupplyDirectlyToMarket: false,
    MarketRequirements: '',
    InterestedInBuyBack: false,
    BuyBackChickenCount: '',
    InterestedInVetSupport: false,
    VetSupportType: '',            // multiple checkbox => comma-separated
    AssistanceRequired: '',        // multiple checkbox => comma-separated
    FacingChallenges: false,
    ChallengeDetails: '',
    ExploringNewMethods: false,
    GettingFairPrice: false,
    PriceIssues: '',
    Suggestions: '',
  };

  constructor(private http: HttpClient) { }

  /**
   * Toggle item in a comma-separated string field.
   * E.g., 'Commercial feed,Wheat'
   */
  toggleSelection(fieldName: keyof Pick<typeof this.formData, 'FeedMaterials' | 'HealthPractices' | 'SellingMethods' | 'VetSupportType' | 'AssistanceRequired'>, option: string) {
    // Current comma-separated values
    const currentValue = typeof this.formData[fieldName] === 'string' ? this.formData[fieldName] : '';
    let selectedValues = currentValue ? (currentValue as string).split(',') : [];

    // If already selected, remove it; otherwise add it
    if (selectedValues.includes(option)) {
      selectedValues = selectedValues.filter((val) => val !== option);
    } else {
      selectedValues.push(option);
    }

    // Rebuild comma-separated string
    this.formData[fieldName] = selectedValues.join(',') as string;
  }

  /**
   * Check if an option is selected in a comma-separated string
   * so we can update the UI (checked vs. unchecked).
   */
  isSelected(fieldName: keyof typeof this.formData, option: string): boolean {
    if (!this.formData[fieldName]) {
      return false;
    }
    return typeof this.formData[fieldName] === 'string' && (this.formData[fieldName] as string).split(',').includes(option);
  }

  onSubmit() {
    console.log('Submitting form data:', this.formData);

    this.http
      .post('https://naatukodiappservice.azurewebsites.net/api/farmer/submit', this.formData)
      .subscribe({
        next: (response) => {
          alert('Questionnaire submitted successfully!');
          console.log('Server response:', response);
        },
        error: (error) => {
          alert('Failed to submit the questionnaire. Please try again.');
          console.error('Error from server:', error);
        },
      });
  }
}