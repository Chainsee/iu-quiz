import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'iu-quiz';
  message: any;
  async ngOnInit() {
    let posts = async () => {
      let response = await fetch('http://localhost:5050/posts/getAll');
      let results = await response.json();
      return results;
    };

    this.message = await posts();
  }
}
