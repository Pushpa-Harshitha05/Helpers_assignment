import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-helperform-page1',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './helperform-page1.component.html',
  styleUrl: './helperform-page1.component.scss'
})

export class HelperformPage1Component {
  genders = [
    { id: 'check-male', value: 'male', display: 'Male' },
    { id: 'check-female', value: 'female', display: 'Female' },
    { id: 'check-other', value: 'other', display: 'Other' },
  ]

  dialCodes: string[] = ['+91', '+1', '+44', '+61', '+81', '+49', '+33']

  pattern: string = '[0-9]{10}'

  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;
  fileUpload() {
    this.fileInput.nativeElement.click();
  }
}
