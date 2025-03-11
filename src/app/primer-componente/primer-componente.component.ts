import { Component, Input } from '@angular/core';
import { SegundoComponenteComponent } from '../segundo-componente/segundo-componente.component';

@Component({
  selector: 'app-primer-componente',
  standalone: true,
  imports: [SegundoComponenteComponent],
  templateUrl: './primer-componente.component.html',
  styleUrl: './primer-componente.component.css'
})
export class PrimerComponenteComponent {
  @Input() dato: string = '';
  @Input() dato2: number = 0;
}
