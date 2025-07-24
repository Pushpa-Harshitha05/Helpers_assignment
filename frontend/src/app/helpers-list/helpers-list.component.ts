import { Component,OnInit,signal } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-helpers-list',
  imports: [
    CommonModule
  ],
  templateUrl: './helpers-list.component.html',
  styleUrl: './helpers-list.component.css'
})
export class HelpersListComponent implements OnInit {

  constructor(private service:ServiceService) {}

  all_helpers: any = [];

  ngOnInit(): void {
    this.service.display().subscribe((response) => {
      this.all_helpers = response;
      console.log(this.all_helpers);
    })
  }
}
