import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss',
})
export class GameComponent {
  fragen: frage[] = [
    {frage: "Frage1", antwort: ["Antwort1", "Antwort2", "Antwort3", "Antwort4"], korrekteAntwort: 1},
    {frage: "Frage2", antwort: ["Antwort1", "Antwort2", "Antwort3", "Antwort4"], korrekteAntwort: 2},
    {frage: "Frage3", antwort: ["Antwort1", "Antwort2", "Antwort3", "Antwort4"], korrekteAntwort: 3},
    {frage: "Frage4", antwort: ["Antwort1", "Antwort2", "Antwort3", "Antwort4"], korrekteAntwort: 4},
  ]
}
type frage = {
  frage: string,
  antwort: string[],
  korrekteAntwort: number,
  kategorie?: string,
}
