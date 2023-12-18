import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  user:string = "Test";

  frage1:Frage[] = [
    {
    frage: "Was ist die Hauptstadt von Deutschland?",
    antworten: ['Berlin','Hamburg','München','Köln'],
    korrekte_antwort: 'Berlin'},
    {
    frage: "Was ist die Hauptstadt von Frankreich?",
    antworten: ['Paris','Hamburg','München','Köln'],
    korrekte_antwort: 'Paris'},
    {
    frage: "Was ist die Hauptstadt von Spanien?",
    antworten: ['Berlin','Hamburg','Madrid','Köln'],
    korrekte_antwort: 'Madrid'},
    {
    frage: "Was ist die Hauptstadt von Niederlande?",
    antworten: ['Berlin','Amsterdam','München','Köln'],
    korrekte_antwort: 'Amsterdam'},

  ]
}

class Frage {
 frage?:string;
 antworten?:string[];
 korrekte_antwort?:string;
}
