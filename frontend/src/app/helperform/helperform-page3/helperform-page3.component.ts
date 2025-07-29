import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-helperform-page3',
  standalone: true,
  imports: [],
  templateUrl: './helperform-page3.component.html',
  styleUrl: './helperform-page3.component.scss'
})
export class HelperformPage3Component {
  @Output () changePage = new EventEmitter();

  onPageChange(){
    this.changePage.emit(2);
  }

  user: any = []

  @Input()  form: FormGroup;
}
