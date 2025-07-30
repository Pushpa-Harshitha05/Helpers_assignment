import { Routes } from '@angular/router';
import { HelpersComponent } from './helpers/helpers.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HelperformComponent } from './helperform/helperform.component';
import { EditHelperComponent } from './edit-helper/edit-helper.component';

export const routes: Routes = [
    {path:'', component: SidebarComponent},
    { path: 'helpers', component: HelpersComponent },
    { path: 'helpers/add-helper', component:HelperformComponent},
    { path: 'helpers/edit-helper/:id', component:EditHelperComponent }
];
