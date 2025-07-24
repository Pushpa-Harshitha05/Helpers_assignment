import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { HelperDetailsComponent } from '../helper-details/helper-details.component';
import { HelpersListComponent } from '../helpers-list/helpers-list.component';

@Component({
  selector: 'app-helpers',
  imports: [
    SidebarComponent,
    HelperDetailsComponent,
    HelpersListComponent
  ],
  templateUrl: './helpers.component.html',
  styleUrl: './helpers.component.css'
})
export class HelpersComponent {

}
