import { Component,signal } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { FormTrackerComponent } from './form-tracker/form-tracker.component';
import { HelperformPage1Component } from './helperform-page1/helperform-page1.component';
import { HelperformPage2Component } from './helperform-page2/helperform-page2.component';
import { HelperformPage3Component } from './helperform-page3/helperform-page3.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-helperform',
  standalone: true,
  imports: [
    SidebarComponent,
    FormTrackerComponent,
    HelperformPage1Component,
    HelperformPage2Component,
    HelperformPage3Component,
    CommonModule
  ],
  templateUrl: './helperform.component.html',
  styleUrl: './helperform.component.scss'
})
export class HelperformComponent {

  category = signal(1);

  pageChanged(num: number):void {
    this.category.set(num);
  }
}

