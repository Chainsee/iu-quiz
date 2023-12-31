import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { DialogComponent } from './dialog/dialog.component';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss',
})
export class GameComponent {
  i: number = 0;
  message: any;
  score: any;

  duration: number = 2 * 100;
  step = 100;
  add_step = 10;
  progress = 0;

  ergebnis = new ergebnis();

  constructor(
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private http: HttpClient,
    private authService: AuthService
  ) {}

  async ngOnInit() {
    let category = this.route.snapshot.paramMap.get('category');
    let posts = async () => {
      let response = await fetch(
        `http://localhost:5050/posts/getKat?kat=${category}`,
        {
          headers: {
            'Authorization': `Bearer ${this.authService.getCurrentUser()}`
          }
        }
      );
      let results = await response.json();
      return results;
    };

    this.message = await posts();
  }

  isRightAnswer: boolean[] = [];
  questionAnswered: boolean[] = [];

  checkAnswer(nummer: number): void {
    let richtig: boolean;
    if (nummer == this.message[this.i].korrekteAntwort) {
      richtig = true;
    } else {
      richtig = false;
    }
    this.isRightAnswer.push(richtig);
    this.questionAnswered.push(true);
    //Prüfung, ob noch Fragen unbeantwortet sind
    if (!this.end()) {
      this.i++;
    } else {
      this.postScore();
      this.showScore(this.calculatePercentage());
    }
  }

  end(): boolean {
    if (this.i === this.message.length - 1) {
      return true;
    }
    return false;
  }

  notAnswered: boolean = true;

  getWrongAnswer(array: number) {
    return !this.isRightAnswer[array];
  }

  calculatePercentage(): number {
    const trueCount = this.isRightAnswer.filter(
      (answer) => answer === true
    ).length;
    const percentage = (trueCount / this.isRightAnswer.length) * 100;
    return percentage;
  }

  async postScore() {
    this.ergebnis.score = this.calculatePercentage();
    this.ergebnis.user = this.authService.getCurrentUser();
    this.ergebnis.kategorie = this.route.snapshot.paramMap.get('category');
    //Timezone?
    this.ergebnis.date = new Date();
    const response = await this.http
      .post('http://localhost:5050/posts/newScore', this.ergebnis, {
        observe: 'response',
      })
      .toPromise();
  }

  showScore(score: number) {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: { score: score },
    });
  }
}

class ergebnis {
  score?: number;
  user?: any;
  kategorie?: any;
  date?: Date;
}
