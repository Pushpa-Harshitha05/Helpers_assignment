import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { FormTrackerComponent } from './form-tracker/form-tracker.component';

@Component({
  selector: 'app-helperform',
  imports: [
    SidebarComponent,
    FormTrackerComponent
  ],
  templateUrl: './helperform.component.html',
  styleUrl: './helperform.component.css'
})
export class HelperformComponent {

}
