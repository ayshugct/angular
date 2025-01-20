import { Routes } from '@angular/router';
import { LinkOverlayComponent } from './link-overlay/link-overlay.component';
import { AutoCompleteComponent } from './auto-complete/auto-complete.component';
import { PrintExampleComponent } from './print-example/print-example.component';

export const routes: Routes = [
    { path: 'home', redirectTo: '/', pathMatch: 'full' },
    { path: 'linkOverlay', component: LinkOverlayComponent },
    { path: 'autoComplete', component: AutoCompleteComponent },
    { path: 'printExample', component: PrintExampleComponent },
];
