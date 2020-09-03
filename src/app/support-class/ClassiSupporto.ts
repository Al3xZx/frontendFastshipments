export class Indirizzo {
  public regione: string;
  public citta: string;
  public provincia: string;
  public nome: string;
  public cognome: string;
  public via: string;
  public civico: string;

  constructor(regione: string, citta: string, provincia: string,nome: string, cognome: string, via: string, civico: string) {
    this.regione=regione;
    this.citta=citta;
    this.provincia=provincia;
    this.via=via;
    this.civico=civico;
    this.nome = nome;
    this.cognome = cognome;
  }

}

export class Abbonamento {
  public idAbbonamento: number;
  public costo: number;
  public descrizione: string;
  public durata:number;
  public numeroSpedizioni: number;
  public direttoreVendite: Dipendente;

  constructor() {
  }
}

export class AbbonamentoSottoscritto {
  public idAbbonamentoSottoscritto: number;
  public dataInizio: Date;
  public dataFine: Date;
  public spedizioniEffettuate: number;
  public cliente:Cliente;
  public abbonamento: Abbonamento;
  public fattura: Fattura;

  constructor() {
  }

}

export class Cliente {

  public idCliente: number;
  public telefono: string;
  public indirizzo: string;
  public indirizzoCliente: Indirizzo;
  public email: string;
  public ragioneSociale: string;
  public pIva: number;
  public cf: string;
  public nome: string;
  public cognome: string;

  public abbonamenti: AbbonamentoSottoscritto[];
  public abbonamentiMagazzino: AbbonamentoMagazzinoSottoscritto[];
  public fatture: Fattura[];
  public merceProprietario: Merce[];

  constructor(telefono: string, email: string, ragioneSociale: string, pIva: number, cf: string, nome: string, cognome: string, indirizzoCliente: Indirizzo) {
    this.telefono = telefono;
    this.email = email;
    this.ragioneSociale = ragioneSociale;
    this.pIva = pIva;
    this.cf = cf;
    this.nome = nome;
    this.cognome = cognome;
    this.indirizzoCliente = indirizzoCliente;
  }
}

export class CartaCredito{

  public numero: string;
  public nomeIntestatario: string;
  public cognomeIntestatario: string;
  public cvv: string;
  public saldoDisponibile: number;

  constructor(numero: string, nomeIntestatario: string, cognomeIntestatario: string, cvv: string){
    this.numero = numero;
    this.nomeIntestatario = nomeIntestatario;
    this.cognomeIntestatario = cognomeIntestatario;
    this.cvv = cvv;
  }
}

export class AccountCliente{

  public idAccountCliente: number;
  public username: Cliente;
  public password: string;

  constructor(username: Cliente, password: string){
    this.username = username;
    this.password = password;
  }
}

export class Spedizione {

  public idSpedizione: number;
  public dataPartenza: Date;
  public dataArrivo: Date;
  public indirizzoDestinatario: string;
  public indirizzoDestinazione: Indirizzo;
  public stato: string;
  public volume: number;
  public pesoTassabile: number;
  public mittente: Cliente;
  public traspRitiro: Dipendente;
  public traspConsegna: Dipendente;
  public traspExtraurbano: Dipendente[];
  public hubPartenza: Hub;
  public hubDestinazione: Hub;
  public hubPassaggio: Hub[];
  public merci: Merce[];
  public fattura: Fattura;

  constructor(indirizzoDestinazione: Indirizzo, volume: number) {
    this.indirizzoDestinazione = indirizzoDestinazione
    this.volume = volume;
  }

}
export class Scaffale{

  public idScaffale: number;
  public numeroLivelli: number;
  public qtaIndiciPos: number;
  public hub: Hub;
  public merci: Merce[];

  constructor() {
  }
}

export class Merce{
  public idMerce: number;
  public volume: number;
  public descrizione: string;
  public indiceRotazione: number;
  public indicePosizione: number;
  public scaffale: Scaffale;
  public stato: string;
  public spedizione: Spedizione;
  public proprietario: Cliente;
  public qta : number;
  public abbonamentoMagazzinoSottoscritto: AbbonamentoMagazzinoSottoscritto;

  constructor(){}


}

export class Dipendente{

  public idDipendente: number;
  public nome: string;
  public cognome: string;
  public dataNascita: string;
  public luogoNascita: string;
  public indirizzo: string;
  public cf: string;
  public titoloStudio: string;
  public mansione: string;
  public hubLavoro: Hub;
  public areaDiCompetenza: AreaDiCompetenza;
  public spedizioneDaRitirare: Spedizione[];

  constructor() {
  }
}

export class AreaDiCompetenza{
  public idArea: number;
  public provincia: string;
  public trasportatori: Dipendente[];

  constructor() {
  }

}

export class AbbonamentoMagazzino {
  public idAbbonamento: number;
  public costo: number;
  public descrizione: string;
  public durata:number; //numero giorni
  public numeroSpedizioni: number;
  public volumeDisponibile: number;
  public direttoreVendite: Dipendente;

  constructor() {
  }
}

export class AbbonamentoMagazzinoSottoscritto{
  public idAbbonamento: number;
  public dataInizio: Date;
  public dataFine: Date;
  public volumeUtilizzato: number;
  public cliente: Cliente;
  public abbonamentoMagazzino: AbbonamentoMagazzino;
  public hub: Hub;
  public fattura: Fattura;

  constructor() {
  }

}
export class Fattura{
  public idFattura: number
  public imponibile: number
  public totale: number
  public abbonamentiSottoscritti: AbbonamentoSottoscritto[]
  public abbonamentiMagazzinoSottoscritti: AbbonamentoMagazzinoSottoscritto[]
  public spedizioni: Spedizione[]
  public cliente: Cliente

  constructor() {}
}

export class IndirizzoHub {

  public regione: string;
  public citta: string;
  public provincia: string;
  public via: string;
  public civico: string;

  constructor(regione: string, citta: string, provincia: string, via: string, civico: string) {
    this.regione=regione;
    this.citta=citta;
    this.provincia=provincia;
    this.via=via;
    this.civico=civico;
  }
}

export class Hub{
  public idHub: number
  public indirizzoHub: IndirizzoHub;
  public indirizzo: string;
  public telefono: string
  public volumeTotale: number
  public volumeDisponibile: number
  public scaffali: Scaffale[]
  public dipendenti: Dipendente[]
  public spedizioniPartenza: Spedizione[]
  public spedizioniArrivo: Spedizione[]
  public spedizioniPassaggio: Spedizione[]

  constructor(idHub: number, volumeTotale: number, volumeDisponibile: number) {
    this.idHub = idHub;
    this.volumeTotale = volumeTotale;
    this.volumeDisponibile = volumeDisponibile;
  }
}

export class Candidato {
  public idCandidato: number;
  public telefono: string
  public nome: string;
  public cognome: string;
  public dataNascita: string;
  public luogoNascita: string;
  public cf: string;
  public titoloStudio: string;
  public indirizzoCandidato: Indirizzo;
  public indirizzo: string
  public annuncio: Annuncio;

  constructor(telefono: string, CF: string, nome: string, cognome: string, dataNascita: string, luogoNascita: string,
              titoloStudio: string, indirizzoCandidato: Indirizzo){
    this.telefono = telefono;
    this.cf = CF;
    this.nome = nome;
    this.cognome = cognome;
    this.dataNascita = dataNascita;
    this.luogoNascita = luogoNascita;
    this.titoloStudio = titoloStudio;
    this.indirizzoCandidato = indirizzoCandidato;
  }
}

export class Annuncio{
  public idAnnuncio: number;
  public descrizione: string;
  public addettoUR: Dipendente;
  public  candidati: Candidato[];

  constructor(){}
}

