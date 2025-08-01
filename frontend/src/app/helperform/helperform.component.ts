import { Component,OnInit,signal, inject, ViewChild, ElementRef } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { FormTrackerComponent } from './form-tracker/form-tracker.component';
import { HelperformPage1Component } from './helperform-page1/helperform-page1.component';
import { HelperformPage2Component } from './helperform-page2/helperform-page2.component';
import { HelperformPage3Component } from './helperform-page3/helperform-page3.component';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ServiceService } from '../services/service.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-helperform',
  standalone: true,
  imports: [
    SidebarComponent,
    FormTrackerComponent,
    HelperformPage1Component,
    HelperformPage2Component,
    HelperformPage3Component,
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './helperform.component.html',
  styleUrl: './helperform.component.scss'
})
export class HelperformComponent implements OnInit {

  category = signal(1);
  data: any = [];
  currenthelper: any;
  random: string;

  private dialog = inject(MatDialog);

  pageChanged(num: number):void {
    this.category.set(num);
  }

  helperForm!: FormGroup;

  constructor(private fb: FormBuilder, private service:ServiceService, private router:Router) {}

  ngOnInit(): void {
    this.helperForm = this.fb.group({
      profile: [null],
      serviceType: ['', Validators.required],
      organization: ['', Validators.required],
      fullName: ['', Validators.required],
      languages: ['', Validators.required],
      gender: ['', Validators.required],
      phonePrefix: ['+91'],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      email: ['', [Validators.required, Validators.email]],
      vehicleType: ['None'],
      kycDocument: [null]
    });
  }

  submitHelperForm() {
    if (this.helperForm.valid) {
      const formData = this.helperForm.value;
      const fields = [];

      for (let key in formData) {
        if (formData.hasOwnProperty(key)) {
          if (Array.isArray(formData[key])) {
            fields.push({ name: key, values: formData[key] });
          } else {
            fields.push({ name: key, value: formData[key] });
          }
        }
      }

      this.service.get_empId().subscribe(emp_id => {
        const payload = {
          emp_id: emp_id, 
          fields: fields  
        };

        this.currenthelper = payload;

        this.service.addHelper(payload).subscribe(res => {
          const dialogRef = this.dialog.open(DialogComponent, {
            data: {
              ...this.currenthelper,
              deletion: 1,
            },
            height: '400px',
            width: '550px'
          });

          dialogRef.afterClosed().subscribe(() => {
            this.router.navigate(['/helpers']);
          });
        });
      });

    } else {
      console.warn("Form is invalid");
    }
  }

  @ViewChild('excelFileClick') fileclick!: ElementRef<HTMLInputElement>;

  activateInput(){
    this.fileclick.nativeElement.click();
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: 'array' });

        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];

        const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
        const headings: any = jsonData[0];

        const totalRows = jsonData.length - 1;
        let completedRequests = 0;

        for (let i = 1; i < jsonData.length; i++) {
          const row = jsonData[i];
          const fields = [];
          fields.push({ name: 'profile', value: null });

          for (let j = 0; j < headings.length; j++) {
            const key = headings[j];
            let value = row[j];

            if (key === 'languages' && typeof value === 'string') {
              try {
                value = JSON.parse(value);
                fields.push({ name: key, values: value });
              } catch (e) {
                console.warn(`Invalid array format in 'languages': ${value}`);
              }
            } else {
              fields.push({ name: key, value: value });
            }
          }

          fields.push({ name: 'kycDocument', value: null });

          this.service.get_empId().subscribe(emp_id => {
            const payload = { emp_id, fields };

            this.service.addHelper(payload).subscribe(() => {
              completedRequests++;

              if (completedRequests === totalRows) {
                const dialogRef = this.dialog.open(DialogComponent, {
                  data: {
                    deletion: 2,
                  },
                  height: '400px',
                  width: '550px'
                });

                dialogRef.afterClosed().subscribe(() => {
                  this.router.navigate(['/helpers']);
                });
              }
            });
          });
        }
      };

      reader.readAsArrayBuffer(file);
    }
  }
  
}
