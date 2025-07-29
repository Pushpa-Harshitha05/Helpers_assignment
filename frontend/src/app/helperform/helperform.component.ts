import { Component,OnInit,signal, AfterViewInit } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { FormTrackerComponent } from './form-tracker/form-tracker.component';
import { HelperformPage1Component } from './helperform-page1/helperform-page1.component';
import { HelperformPage2Component } from './helperform-page2/helperform-page2.component';
import { HelperformPage3Component } from './helperform-page3/helperform-page3.component';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ServiceService } from '../services/service.service';

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

  pageChanged(num: number):void {
    this.category.set(num);
  }

  helperForm!: FormGroup;

  constructor(private fb: FormBuilder, private service:ServiceService) {}

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
      email: ['', [Validators.email]],
      vehicleType: ['None'],
      kycDocument: [null]
    });
  }

  submitHelperForm() {
    if (this.helperForm.valid) {

      const formData = this.helperForm.value;
      for (let key in formData){
        if(formData.hasOwnProperty(key)){
          if(Array.isArray(formData[key])){
            this.data.push({name:key,values:formData[key]});
          }
          else{
            this.data.push({name:key,value:formData[key]});
          }
        }
      }

      this.service.addHelper(this.data).subscribe(res => {
        console.log("Success", res);
      });
    } else {
      console.warn("Form is invalid");
    }
  }

  
}

