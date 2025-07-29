import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { HelpersListComponent } from '../helpers-list/helpers-list.component';
import { ServiceService } from '../services/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-helpers',
  standalone: true,
  imports: [
    SidebarComponent,
    HelpersListComponent
  ],
  templateUrl: './helpers.component.html',
  styleUrl: './helpers.component.scss'
})
export class HelpersComponent implements OnInit {
  constructor(private service:ServiceService,private router:Router) {}

  helpers_number: number = 0;
  all_helpers: any;

  ngOnInit(): void {
  this.service.display().subscribe((response) => {
    this.all_helpers = response;
    this.helpers_number = this.all_helpers.length;
    });
  }

  addNewHelper() {
    this.router.navigate(['/helpers/add-helper'])
  }
}
