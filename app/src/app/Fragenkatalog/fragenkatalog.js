function frageAnzeigen(frage) {
    var fragenContainer = document.getElementById("quiz-container");
    var frageElement = document.createElement("div");
    frageElement.classList.add("frage");
    frageElement.textContent = "Frage: " + frage.frage;
    fragenContainer.appendChild(frageElement);
    frage.antworten.forEach(function (antwort, index) {
        var antwortElement = document.createElement("div");
        antwortElement.classList.add("antwort");
        antwortElement.textContent = (index + 1) + ". " + antwort;
        fragenContainer.appendChild(antwortElement);
    });
    var trennlinie = document.createElement("hr");
    fragenContainer.appendChild(trennlinie);
}
// Beispiel-Fragen
var frage1 = {
    frage: "Was ist die Hauptstadt von Frankreich?",
    antworten: ["Berlin", "London", "Madrid", "Paris"],
    korrekte_antwort: "Paris"
};
var frage2 = {
    frage: "Welches ist das größte Säugetier der Welt?",
    antworten: ["Elefant", "Walhai", "Giraffe", "Nashorn"],
    korrekte_antwort: "Walhai"
};
// Hier kannst du weitere Fragen hinzufügen
// ...
// Anzeigen der Fragen
frageAnzeigen(frage1);
frageAnzeigen(frage2);
// ...
