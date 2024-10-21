import { Routes } from '@angular/router';
import { LinkOverlayComponent } from './link-overlay/link-overlay.component';

export const routes: Routes = [
    { path: 'home', redirectTo: '/', pathMatch: 'full' },
    { path: 'linkOverlay', component: LinkOverlayComponent }
];
