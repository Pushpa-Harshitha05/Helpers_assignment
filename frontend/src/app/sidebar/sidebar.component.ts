import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  imports: [
    CommonModule
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  sidebarItems: any = [
    { 
      main_name: 'RESIDENT',
      items: [
        { image:'assets/images/building.png',name: 'Flats' },
        { image:'assets/images/building.png',name: 'Helpdesk Setup' },
        { image:'assets/images/building.png',name: 'Helpdesk Tickets' },
        { image:'assets/images/building.png',name: 'Renovation Works' },
        { image:'assets/images/building.png',name: 'Violation Setup' },
        { image:'assets/images/building.png',name: 'Violation Tickets' },
        { image:'assets/images/building.png',name: 'Amenities' }
      ],
      isOpen: false
    },
    {
      main_name: 'STAFF',
      items: [
        { image:'assets/images/building.png',name: 'Roles & Departments' },
        { image:'assets/images/building.png',name: 'Staff Directory' },
        { image:'assets/images/building.png',name: 'Helpers' }
      ],
      isOpen: false
    },
    {
      main_name: 'WORK',
      items: [
        { image:'assets/images/building.png',name: 'Assets' },
        { image:'assets/images/building.png',name: 'Locations' },
        { image:'assets/images/building.png',name: 'Work Packages' },
        { image:'assets/images/building.png',name: 'Work Scheduler' },
        { image:'assets/images/building.png',name: 'Work Logs' },
        { image:'assets/images/building.png',name: 'Issues' }
      ],
      isOpen: false
    }
  ]

  selected: { groupIdx: number, itemIdx: number } | null = null;

  selectItem(groupIdx: number, itemIdx: number) {
    this.selected = { groupIdx, itemIdx };
  }
}
