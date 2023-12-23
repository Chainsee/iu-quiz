import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss',
})
export class CategoryComponent {
  categories: any;
  selectedCategory: any;
  constructor(private router: Router) { }
  async ngOnInit() {
    let posts = async () => {
      let response = await fetch('http://localhost:5050/posts/getKategorien');
      let results = await response.json();
      return results;
    };
    this.categories = await posts();
  }

  getCategory() {
    this.router.navigate(['/game', this.selectedCategory]);
  }
}
