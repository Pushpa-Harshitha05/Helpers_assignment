import { Component,OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-helpers-list',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './helpers-list.component.html',
  styleUrl: './helpers-list.component.scss'
})
export class HelpersListComponent {
  constructor(private service:ServiceService) {}

  all_helpers: any = [];
  selectedHelper: any;

  ngOnInit(): void {
  this.service.display().subscribe((response) => {
    this.all_helpers = response;
    if (this.all_helpers.length > 0) {
      this.selectedHelper = this.all_helpers[0];
    }
    });
  }


  selectHelper(helper: any) {
    this.selectedHelper = helper;
  }
  
  getFieldValue(fields: any[], fieldName: string): string {
  const found = fields.find(f => f.name === fieldName);
  
  if (found?.value && found.value.trim() !== '') {
    return found.value;
  }

  if (Array.isArray(found?.values) && found.values.length > 0) {
    return found.values.join(', ');
  }

  return '-';
}

}
