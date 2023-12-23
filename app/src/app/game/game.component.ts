import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss',
})
export class GameComponent {
  i: number = 0;
  message: any;

  duration: number = 2 * 100;
  step = 100;
  add_step = 10;
  progress = 0;

  constructor(private route: ActivatedRoute) { }

  async ngOnInit() {
    let category = this.route.snapshot.paramMap.get('category');
    let posts = async () => {
      let response = await fetch('http://localhost:5050/posts/getKat?kat=' + category);
      let results = await response.json();
      return results;
    };

    this.message = await posts();
  }

  isRightAnswer: boolean[] = [];

  antwortPruefen(nummer: number): void {
    let richtig: boolean;
    if (nummer == this.message[this.i].korrekteAntwort) {
      richtig = true;
    } else {
      richtig = false;
    }
    this.isRightAnswer.push(richtig);
    //Prüfung, ob noch Fragen unbeantwortet sind
    if (!this.ende()) {
      this.i++;
    }
  }

  ende(): boolean {
    if (this.i === this.message.length - 1) {
      return true;
    }
    return false;
  }

  notAnswered: boolean = true;

  getWrongAnswer(array: number) {
    return !this.isRightAnswer[array];
  }
}
