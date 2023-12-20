import { Component } from '@angular/core';

@Component({
  selector: 'app-fragenkatalog',
  templateUrl: './fragenkatalog.component.html',
  styleUrl: './fragenkatalog.component.scss'
})
export class FragenkatalogComponent {
  frage1:Frage = {
    frage: "Was ist die Hauptstadt von Deutschland?",
    antworten: ['Berlin','Hamburg','München','Köln'],
    korrekte_antwort: 'Berlin'

  }

  frageAnzeigen(frage:Frage):void {
    var fragenContainer = document.getElementById("quiz-container");
    var frageElement = document.createElement("div");
    frageElement.classList.add("frage");
    frageElement.textContent = "Frage: " + frage.frage;
    fragenContainer?.appendChild(frageElement);
    // frage.antworten.forEach(function (antwort, index) {
    //     var antwortElement = document.createElement("div");
    //     antwortElement.classList.add("antwort");
    //     antwortElement.textContent = (index + 1) + ". " + antwort;
    //     fragenContainer.appendChild(antwortElement);
    // });
    var trennlinie = document.createElement("hr");
    fragenContainer?.appendChild(trennlinie);
}

}


class Frage {
  frage?:string;
  antworten?:string[];
  korrekte_antwort?:string;
}
