import { Component, ElementRef, ViewChild, Output, EventEmitter, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioButtonComponent } from '../../radio-button/radio-button.component';
import { SelectDropdownComponent } from '../../select-dropdown/select-dropdown.component';
import { CheckboxComponent } from '../../checkbox/checkbox.component';
import { HelperformPage2Component } from '../helperform-page2/helperform-page2.component';
import { ReactiveFormsModule, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-helperform-page1',
  standalone: true,
  imports: [
    CommonModule,
    RadioButtonComponent,
    SelectDropdownComponent,
    CheckboxComponent,
    HelperformPage2Component,
    ReactiveFormsModule
  ],
  templateUrl: './helperform-page1.component.html',
  styleUrl: './helperform-page1.component.scss'
})

export class HelperformPage1Component{

  pattern: string = '[0-9]{10}'

  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;
  fileUpload() {
    this.fileInput.nativeElement.click();
  }

  @ViewChild('kycfileInput') kycfileInput!: ElementRef<HTMLInputElement>;
  kycfileUpload() {
    this.kycfileInput.nativeElement.click();
  }

  @Output() changePage = new EventEmitter<number>();

  onPageChange() {
    this.changePage.emit(2);
  }

  @Input() form!: FormGroup;

}