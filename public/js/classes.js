class Personne {
  constructor(nom, argent, lieu) {
    this.nom = nom;
    this.argent = argent;
    this.lieu = lieu;
    this.lieu.personnes.push(this);
  }

  seDeplacer(lieu) {
    if (
      this.lieu.constructor.name == "Lieu" &&
      this.lieu.personnes.length > 0
    ) {
      this.lieu.personnes.splice(this.lieu.personnes.indexOf(this));
    }
    lieu.personnes.push(this);
    this.lieu = lieu;
  }
}

class Patient extends Personne {
  constructor(nom, argent, lieu, maladie, etatSante) {
    super(nom, argent, lieu);
    this.maladie = maladie;
    this.etatSante = etatSante;
    this.poche = [];
    this.traitement = null;
  }

  seDeplacer(lieu) {
    super.seDeplacer(lieu);
  }
  payer(prix) {
    let aPaye = false;
    if (this.argent > prix) {
      this.argent -= prix;
      // this.prendre(produit);
      aPaye = true;
    }
    return aPaye;
  }
  prendre(element) {
    this.poche.push(element);
    this.traitement = element;
  }
  seSoigner() {
    if (this.traitement != null) {
      this.poche.splice(this.poche.indexOf(this.traitement), 1);
      this.etatSante = "soigné";
      this.traitement = null;
    }
    console.log(`${this.nom} est ${this.etatSante}`);
  }
}

class Doctor extends Personne {
  constructor(nom, argent, lieu, chat) {
    super(nom, argent, lieu);
    let diagno1 = { maladie: "mal indenté", traitement: "ctrl+maj+f" };
    let diagno2 = { maladie: "unsave", traitement: "saveOnFOcusChange" };
    let diagno3 = { maladie: "404", traitement: "CheckLinkRelation" };
    let diagno4 = { maladie: "azmatique", traitement: "Ventoline" };
    let diagno5 = { maladie: "SyntaxError", traitement: "f12+doc" };
    this.diagnostiques = [diagno1, diagno2, diagno3, diagno4, diagno5];
    this.prixConsultation = 50;
    this.monChat = chat;
  }
  FaireEntrer(patient) {
    let possibleDentrer =
      this.lieu.personnes.length == 2 &&
      this.lieu.personnes.includes(this) &&
      this.lieu.personnes.includes(this.monChat);

    if (possibleDentrer) {
      patient.seDeplacer(this.lieu);
      console.log(`${patient.nom} est entré au cabinet`);
    } else {
      console.log(
        `monsieur ${patient.nom} Veuillez patienter  dans la salle d'attente je suis encore occuper`
      );
    }
  }
  fairePayer(patient) {
    let aPayerLaConsult = patient.payer(this.prixConsultation);
    if (aPayerLaConsult) {
      this.argent += this.prixConsultation;
      console.log(`${patient.nom} à payé le docteur`);
    } else {
      console.log(
        "Si vous n'avez pas assez sur vous je vous envoi la facture à la maison"
      );
    }
  }
  faireSortir(patient, lieu) {
    console.log(`${patient.nom} a quité le cabinet`);
    patient.seDeplacer(lieu);
    console.log(`${patient.nom} est allé à la ${lieu.nom}`);
  }

  diagnostique(patient) {
    let diagnoPatient;
    this.diagnostiques.forEach((elt) => {
      if (elt.maladie === patient.maladie) {
        patient.traitement = elt.traitement;
      }
    });
    console.log(`le traitement de ${patient.nom} est ${patient.traitement}`);
    return diagnoPatient;
  }
}

class Lieu {
  constructor(nom, personnes) {
    this.nom = nom;
    this.personnes = personnes;
  }
}

class Pharmacie extends Lieu {
  constructor(nom, personnes) {
    super(nom, personnes);
    let traitement1 = { nomTraitement: "ctrl+maj+f", prix: 60 };
    let traitement2 = { nomTraitement: "saveOnFocusChange", prix: 100 };
    let traitement3 = { nomTraitement: "CheckLinkRelation", prix: 35 };
    let traitement4 = { nomTraitement: "Ventoline", prix: 40 };
    let traitement5 = { nomTraitement: "f12+doc", prix: 20 };

    this.traitements = [
      traitement1,
      traitement2,
      traitement3,
      traitement4,
      traitement4,
      traitement5,
    ];
  }
}
class Pharmacien extends Personne {
  constructor(nom, argent, lieu) {
    super(nom, argent, lieu);
  }

  DemanderPayement(client, cimetiere) {
    this.lieu.traitements.forEach((medicament) => {
      if (medicament.nomTraitement === client.traitement) {
        console.log(`le traitement de ${client.nom} coûte ${medicament.prix}€`);
        if (!client.payer(medicament.prix)) {
          console.log(
            `${client.nom} n'as pas assez d'argent pour payer le traitement`
          );
          client.etatSante = "mort";
          console.log(
            `${client.nom} est ${client.etatSante}, donc il est au cimetiere`
          );
          client.lieu.personnes.splice(
            client.lieu.personnes.indexOf(client),
            1
          );
          cimetiere.personnes.push(client);
          client.lieu = cimetiere;
        } else {
          console.log(`${client.nom} vient de payer son traitement`);
          client.seSoigner();
        }
      }
    });
  }
}
class Animal {
  constructor(nom, type, genre, cri, lieu) {
    this.nom = nom;
    this.type = type;
    this.genre = genre;
    this.cri = cri;
    this.lieu = lieu;
    this.lieu.personnes.push(this);
  }

  criAnimal() {
    console.log(this.cri);
  }
}

export { Doctor, Patient, Animal, Lieu, Pharmacie, Pharmacien };
