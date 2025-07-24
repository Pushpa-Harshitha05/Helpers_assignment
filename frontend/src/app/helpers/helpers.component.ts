import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { HelperDetailsComponent } from '../helper-details/helper-details.component';
import { HelpersListComponent } from '../helpers-list/helpers-list.component';
import { ServiceService } from '../services/service.service';
import { Router } from '@angular/router';

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
  constructor(private service:ServiceService,private router:Router) {}

  addNewHelper() {
    // this.service.addHelper({ serviceType:'cook' }).subscribe((response) => {
    //   console.log(response);
    // })
    this.router.navigate(['/helpers/add-helper'])
  }
}
