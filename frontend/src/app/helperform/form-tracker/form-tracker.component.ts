import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-tracker',
  standalone: true,
  imports: [],
  templateUrl: './form-tracker.component.html',
  styleUrl: './form-tracker.component.scss'
})
export class FormTrackerComponent {

  constructor(private router:Router) {}

  Helpersroute() {
    this.router.navigate(['/helpers']);
  }
}
