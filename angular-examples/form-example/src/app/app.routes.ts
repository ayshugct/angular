import { Routes } from '@angular/router';
import { EmployeeComponent } from './component/employee/employee.component';
import { AdminComponent } from './component/admin/admin.component';

export const routes: Routes = [
    { path: '', component: EmployeeComponent},
    {path:'employee', component:EmployeeComponent},
    {path:'admin', component:AdminComponent},
    {path:'**', component: EmployeeComponent}
];
