import {
  docteur,
  salleAttente,
  pharmacie,
  pharmacien,
  chat,
} from "./objets.js";

let chatCri = () => {
  chat.criAnimal();
};

let visitDoctor = () => {
  console.log(
    `Dans la salle dattente il y a ${salleAttente.personnes.length} ${
      salleAttente.personnes.length > 1 ? "personnes" : "personne"
    }`
  );
  let patient = salleAttente.personnes[i];
  docteur.FaireEntrer(patient);
  console.log(`la maladie de ${patient.nom} est ${patient.maladie}`);
  docteur.diagnostique(patient);
  docteur.fairePayer(patient);
  console.log(`${patient.nom} a ${patient.argent}€ actuellement`);
  docteur.faireSortir(patient, pharmacie);
  pharmacien.DemanderPayement(patient);
  console.log("------------------");
  i--;
  if (i == -1) {
    clearInterval(interval1);
    clearInterval(interval2);
  }
};

let i = salleAttente.personnes.length - 1;
let interval1 = setInterval(visitDoctor, 1000);
let interval2 = setInterval(chatCri, 2000);
