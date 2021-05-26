import { Doctor, Patient, Lieu, Animal } from "classes.js";

let patient1 = new Patient("Marcus", 200, "mal indenté", "malade");
let patient2 = new Patient("Optimus", 210, "unsave", "malade");
let patient3 = new Patient("Goku", 190, "404", "malade");
let patient4 = new Patient("Kountakinté", 180, "azmatique", "malade");
let patient5 = new Patient("", 170, "SyntaxError", "malade");
let tabPatients = [patient1, patient2, patient3, patient4, patient5];
let chat = new Animal("Simba", "félin", "Animal de compagnie", "Miau");
let cabinet = new Lieu("Cabinet", []);
let salleAttente = new Lieu("Salle d'Attente", tabPatients);
let pharmacie = new pharmacie("Pharmacie", []);
let docteur = new Doctor("Strange", 0, cabinet);
