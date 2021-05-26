import {
  docteur,
  cabinet,
  salleAttente,
  pharmacie,
  pharmacien,
  chat,
} from "./objets.js";
let visitDoctor = () => {
  let i = salleAttente.personnes.length - 1;
  while (salleAttente.personnes.length > 0) {
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
    setTimeout(() => {
      chat.criAnimal();
    }, 100);
    i--;
  }
};

visitDoctor();
