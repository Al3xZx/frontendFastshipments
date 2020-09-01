import {Component, Input, OnInit} from '@angular/core';
import {AnnunciService} from '../../services/data/annunci.service';
import {Annuncio, Candidato, Indirizzo} from '../../support-class/ClassiSupporto';

@Component({
  selector: 'app-candidatura-annuncio',
  templateUrl: './candidatura-annuncio.component.html',
  styleUrls: ['./candidatura-annuncio.component.css']
})
export class CandidaturaAnnuncioComponent implements OnInit {

  @Input() annuncioScelto: Annuncio;

  candidato: Candidato;
  errCandidatura: string;
  succReg: string;

  //dati per candidato
  telefono: string;
  cf: string;
  nome: string;
  cognome: string;
  dataN: string;
  luogoN: string;
  titoloS: string;

  //dati per Indirizzo
  regione: string;
  citta: string;
  provincia: string;
  via: string;
  civico: string;


  constructor(private annunciService: AnnunciService) { }

  ngOnInit(): void {
  }


  registraCandidatura() {
    var indirizzo = new Indirizzo(this.regione, this.citta, this.provincia, this.nome, this.cognome,this.via, this.civico);
    var candidato = new Candidato(this.telefono, this.cf, this.nome, this.cognome, this.dataN, this.luogoN, this.titoloS, indirizzo);
    this.annunciService.registraCandidatura(candidato, this.annuncioScelto.idAnnuncio).subscribe(
      result =>{
        this.candidato = result;
        this.succReg = "La candidatura è stata registrata correttamente nei nostri sistemi ti contatteremo al più presto!"
      },
      error => {
          this.errCandidatura = error.error.message;
      }
    )

  }
}
