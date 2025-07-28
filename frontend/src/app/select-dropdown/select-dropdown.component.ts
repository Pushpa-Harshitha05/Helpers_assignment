import { Component,Input } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-select-dropdown',
  standalone: true,
  imports: [ 
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    MatInputModule,
    CommonModule
  ],
  templateUrl: './select-dropdown.component.html',
  styleUrl: './select-dropdown.component.scss'
})
export class SelectDropdownComponent {

  @Input() heading!: string;
  @Input() label!: string;
  @Input() options: string[] = [];
  @Input() formControlName!: string;

}

