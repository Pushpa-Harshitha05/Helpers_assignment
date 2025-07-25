import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { FormTrackerComponent } from './form-tracker/form-tracker.component';
import { HelperformPage1Component } from './helperform-page1/helperform-page1.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-helperform',
  standalone: true,
  imports: [
    SidebarComponent,
    FormTrackerComponent,
    HelperformPage1Component,
    CommonModule
  ],
  templateUrl: './helperform.component.html',
  styleUrl: './helperform.component.scss'
})
export class HelperformComponent {

}

