export class Question {
    kategorie: string;
    frage: string;
    antworten: string[];
    korrekteAntwort: string;

    constructor() {
        this.kategorie = '';
        this.frage = '';
        this.antworten = ['', '', '', ''];
        this.korrekteAntwort = '';
    }
}
