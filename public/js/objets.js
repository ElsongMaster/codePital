import {
  Doctor,
  Patient,
  Lieu,
  Animal,
  Pharmacie,
  Pharmacien,
} from "./classes.js";
let salleAttente = new Lieu("Salle d'Attente", []);
let patient1 = new Patient(
  "Marcus",
  200,
  salleAttente,
  "mal indenté",
  "malade"
);
let patient2 = new Patient("Optimus", 210, salleAttente, "unsave", "malade");
let patient3 = new Patient("Goku", 190, salleAttente, "404", "malade");
let patient4 = new Patient(
  "Kountakinté",
  180,
  salleAttente,
  "azmatique",
  "malade"
);
let patient5 = new Patient(
  "Arnold",
  170,
  salleAttente,
  "SyntaxError",
  "malade"
);
let tabPatients = [patient1, patient2, patient3, patient4, patient5];
let cabinet = new Lieu("Cabinet", []);
let chat = new Animal("Simba", "félin", "Animal de compagnie", "Miau", cabinet);

let pharmacie = new Pharmacie("Pharmacie", []);
let docteur = new Doctor("Strange", 0, cabinet, chat);
let cimetiere = new Lieu("cimetiere", []);
let pharmacien = new Pharmacien("King", 0, pharmacie);

export {
  docteur,
  cabinet,
  salleAttente,
  pharmacie,
  pharmacien,
  cimetiere,
  chat,
};
