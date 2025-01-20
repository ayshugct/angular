import { Component } from '@angular/core';
import { PrintSectionComponent } from './print-section/print-section.component';
import { PrintTableComponent } from './print-table/print-table.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-print-example',
  standalone: true,
  imports: [FormsModule, CommonModule, PrintSectionComponent, PrintTableComponent],
  templateUrl: './print-example.component.html',
  styleUrl: './print-example.component.scss'
})
export class PrintExampleComponent {

  numberOfSections: number = 10;
  numberOfTables: number = 10;
  numberOfRows:number = 10;
  showTables: boolean = true;

  onSubmit() {
    this.showTables = true;
  }

  onReset() {
    this.numberOfSections = 0;
    this.numberOfTables = 0;
    this.numberOfRows = 0;
    this.showTables = false;
  }
}
