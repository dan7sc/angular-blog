import { Component } from '@angular/core';
import { MenuTitleComponent } from '../../components/menu-title/menu-title.component';
import { FeaturedCardComponent } from '../../components/featured-card/featured-card.component';
import { BasicCardComponent } from '../../components/basic-card/basic-card.component';
import { MenuBarComponent } from '../../components/menu-bar/menu-bar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MenuTitleComponent, FeaturedCardComponent, BasicCardComponent, MenuBarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
