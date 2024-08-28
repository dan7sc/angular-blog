import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { fakeData } from '../../data/fakeData';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit {
  photoCover: string = "https://as1.ftcdn.net/v2/jpg/02/48/42/64/1000_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg"
  contentTitle: string = "Content title"
  contentDescription: string = "Content description"
  private id: string | null = "0"

  constructor(
    private router: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.router.paramMap.subscribe(value =>
      this.id = value.get("id"))

    this.setValues(this.id?.toString() ?? "0");
  }

  setValues(id: string | null) {
    const result = fakeData.filter(article => article.id.toString() == id)[0];

    console.log(result);

    if (result) {
      this.contentTitle = result.title;
      this.contentDescription = result.description;
      this.photoCover = result.photo;
      this.id = result.id.toString();
    }
  }
}
