import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-basic-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './basic-card.component.html',
  styleUrl: './basic-card.component.css'
})
export class BasicCardComponent {
  @Input()
  photoCover: string = ""
  @Input()
  cardTitle: string = ""
  @Input()
  id: string = "0"
}
