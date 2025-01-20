import { Component, Input } from '@angular/core';
import { PrintTableComponent } from '../print-table/print-table.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-print-section',
  standalone: true,
  imports: [CommonModule, FormsModule, PrintTableComponent],
  templateUrl: './print-section.component.html',
  styleUrl: './print-section.component.scss'
})
export class PrintSectionComponent {

  @Input() numberOfTables:number = 0;
  @Input() numberOfRows:number = 0;
}
