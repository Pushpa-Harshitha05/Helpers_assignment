import { Component, OnInit, signal, ViewChild } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { HelpersListComponent } from '../helpers-list/helpers-list.component';
import { ServiceService } from '../services/service.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SelectDropdownComponent } from '../select-dropdown/select-dropdown.component';

function getFieldValue(fields: any[], key: string): string {
  const field = fields.find(f => f.name === key);
  return field?.value?.toLowerCase() ?? '';
}

@Component({
  selector: 'app-helpers',
  standalone: true,
  imports: [
    SidebarComponent,
    HelpersListComponent,
    CommonModule,
    SelectDropdownComponent
  ],
  templateUrl: './helpers.component.html',
  styleUrl: './helpers.component.scss'
})
export class HelpersComponent implements OnInit {
  constructor(private service:ServiceService,private router:Router) {}

  helpers_number: number = 0;
  all_helpers: any;
  searchSignal = signal('');
  showdropdown: boolean = false;
  selectedSortField: number = 1;
  showdropdown_filter: boolean = false;
  filtered_helpers: any;

  @ViewChild('servicedropdown') servicedropdown!: SelectDropdownComponent;
  @ViewChild('ordropdown') ordropdown!: SelectDropdownComponent;

  applyFilters() {
    const service = this.servicedropdown.value;
    const org = this.ordropdown.value;

    this.filtered_helpers = this.all_helpers.filter(helper => {
      const serviceField = helper.fields.find(f => f.name === 'serviceType');
      const orgField = helper.fields.find(f => f.name === 'organization');

      const matchesService = service ? serviceField?.value === service : true;
      const matchesOrg = org ? orgField?.value === org : true;

      return matchesService && matchesOrg;
    });

    this.showdropdown_filter = false;
  }

  resetFilters() {
    this.servicedropdown.writeValue(null);
    this.ordropdown.writeValue(null);
    this.filtered_helpers = [...this.all_helpers];
    this.showdropdown_filter = false;
  }

  ngOnInit(): void {
    this.service.display().subscribe((response) => {
      this.all_helpers = response;
      this.helpers_number = this.all_helpers.length;
      });

    if(this.all_helpers){
      this.all_helpers.sort((a, b) => {
        const val1 = (getFieldValue(a.fields, 'fullName') || '').toLowerCase();
        const val2 = (getFieldValue(b.fields, 'fullName') || '').toLowerCase();
        return val1.localeCompare(val2);
      });
    }
  }

  addNewHelper() {
    this.router.navigate(['/helpers/add-helper'])
  }

  sortBy(value: any) {
    if(value == 'serviceType'){
      this.selectedSortField = 2;
    }
    else{
      this.selectedSortField = 1;
    }
    this.showdropdown = false;

    this.all_helpers.sort((a, b) => {
      const aVal = (getFieldValue(a.fields, value) || '').toLowerCase();
      const bVal = (getFieldValue(b.fields, value) || '').toLowerCase();
      return aVal.localeCompare(bVal);
    });

  }
}
