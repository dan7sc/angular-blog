import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-featured-card',
  standalone: true,
  imports: [],
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
}
