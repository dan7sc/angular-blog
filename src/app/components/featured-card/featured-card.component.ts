import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-featured-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './featured-card.component.html',
  styleUrl: './featured-card.component.css'
})
export class FeaturedCardComponent {
  @Input()
  photoCover: string = ""
  @Input()
  cardTitle: string = ""
  @Input()
  cardDescription: string = ""
  @Input()
  id: string = "0"
}
