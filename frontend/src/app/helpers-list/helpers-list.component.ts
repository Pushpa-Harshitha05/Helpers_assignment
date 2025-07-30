import { Component, inject } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

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
  constructor(private service:ServiceService, private router:Router) {}

  all_helpers: any = [];
  selectedHelper: any;

  private dialog = inject(MatDialog);

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

  editHelper(helper: any): void {
    this.router.navigate(['/helpers/edit-helper', helper._id]);
  }


  deleteHelper(helper: any) {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '400px',
      data: {
        ...helper.fields,
        deletion: true
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.service.deleteHelper(helper._id).subscribe((res) => {
          window.location.reload();
        })
      } else {
        console.log('User deletion cancelled.');
      }
    });
  }

}
