import { Routes } from '@angular/router';
import { HelpersComponent } from './helpers/helpers.component';
import { SidebarComponent } from './sidebar/sidebar.component';

export const routes: Routes = [
    { path:'', component: SidebarComponent },
    { path: 'helpers', component: HelpersComponent },
];
