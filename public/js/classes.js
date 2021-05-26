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
  constructor(nom, argent, maladie, etatSante) {
    super(nom, argent);
    this.maladie = maladie;
    this.etatSante = etatSante;
    this.poche = [];
    this.traitement = null;
  }

  seDeplacer(lieu) {
    super.seDeplacer(lieu);
  }
  payer(traitement) {
    let aPaye = false;
    if (this.argent > traitement.prix) {
      this.argent -= traitement.prix;
      this.prendre(produit);
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
  }
}

class Doctor extends Personne {
  constructor(nom, argent, cabinet, chat) {
    super(nom, argent);
    let diagno1 = { maladie: "mal indenté", traitement: "ctrl+maj+f" };
    let diagno2 = { maladie: "unsave", traitement: "saveOnFOcusChange" };
    let diagno3 = { maladie: "404", traitement: "CheckLinkRelation" };
    let diagno4 = { maladie: "azmatique", traitement: "Ventoline" };
    let diagno5 = { maladie: "syntaxError", traitement: "f12+doc" };
    this.diagnostiques = [diagno1, diagno2, diagno3, diagno4, diagno5];
    this.lieu = cabinet;
    this.prixConsultation = 50;
    this.monChat = chat;
  }
  possibleDEntrer(patient) {
    return (
      this.lieu.length == 2 &&
      this.lieu.personnes.includes(this) &&
      this.lieu.personnes.includes(this.monChat)
    );
  }
  fairePayer(patient) {
    let aPayerLaConsult = patient.payer(this.prixConsultation);
    if (aPayerLaConsult) {
      this.argent += this.prixConsultation;
    } else {
      console.log("Je vous envoi la facture à la maison");
    }
  }
  faireSortir(patient, lieu) {
    patient.seDeplacer(lieu);
  }

  diagnostique(patient) {
    let diagnoPatient;
    this.diagnostiques.forEach((elt) => {
      if (elt.maladie === patient.maladie) {
        diagnoPatient = elt.traitement;
      }
    });
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
    let traitement1 = { traitement: "ctrl+maj+f", prix: 60 };
    let traitement2 = { traitement: "saveOnFocusChange", prix: 100 };
    let traitement3 = { traitement: "CheckLinkRelation", prix: 35 };
    let traitement4 = { traitement: "Ventoline", prix: 40 };
    let traitement5 = { traitement: "f12+doc", prix: 20 };

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

class Animal {
  constructor(nom, type, genre, cri) {
    this.nom = nom;
    this.type = type;
    this.genre = genre;
    this.cri = cri;
  }
}
