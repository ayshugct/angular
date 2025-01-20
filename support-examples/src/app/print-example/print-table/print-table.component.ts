import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-print-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './print-table.component.html',
  styleUrl: './print-table.component.scss'
})
export class PrintTableComponent {

  @Input() numberOfRow:number = 0;
}
