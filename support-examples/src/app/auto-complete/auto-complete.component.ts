import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
@Component({
  selector: 'app-auto-complete',
  standalone: true,
  imports: [CommonModule,
    FormsModule,AutoCompleteModule,MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule,],
  templateUrl: './auto-complete.component.html',
  styleUrl: './auto-complete.component.scss'
})
export class AutoCompleteComponent {
  suggestions: string[] = [];
  allItems: string[] = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig', 'Grape'];
  
  // Declare selectedItem
  selectedItem: string | undefined;

  search(event: any): void {
    const query = event.query.toLowerCase();
    this.suggestions = this.allItems.filter(item => item.toLowerCase().includes(query));
  }
}