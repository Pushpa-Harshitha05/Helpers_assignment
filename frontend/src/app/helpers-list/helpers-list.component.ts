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

  ngOnInit(): void {
    this.service.display().subscribe((response) => {
      this.all_helpers = response;
    })
  }
}
