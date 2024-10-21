import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LinkOverlayComponent } from './link-overlay/link-overlay.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
    { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'linkOverlay', component: LinkOverlayComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    CommonModule,

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }