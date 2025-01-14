import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template: `<router-outlet></router-outlet>`, // Use this if you are loading routed components
  // OR use templateUrl if you have an external HTML file:
  // templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'CRMFrontend';
}