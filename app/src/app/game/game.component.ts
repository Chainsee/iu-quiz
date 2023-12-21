import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ProgressBar } from '../../models/progressBar.model';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
})
export class GameComponent {
  i: number = 0;
  message: any;

  duration: number = 2 * 100;
  step = 100;
  add_step = 10;
  progress = 0;

  async ngOnInit() {
    let posts = async () => {
      let response = await fetch('http://localhost:5050/posts/getAll');
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
