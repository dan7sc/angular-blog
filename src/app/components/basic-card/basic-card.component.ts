import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-basic-card',
  standalone: true,
  imports: [],
  templateUrl: './basic-card.component.html',
  styleUrl: './basic-card.component.css'
})
export class BasicCardComponent {
  @Input()
  photoCover: string = ""
  @Input()
  cardTitle: string = ""
}
