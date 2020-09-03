import {Component, Input, OnInit} from '@angular/core';
import {
  Abbonamento,
  AbbonamentoMagazzino, AbbonamentoMagazzinoSottoscritto,
  AbbonamentoSottoscritto,
  CartaCredito,
  Hub,
  Spedizione
} from '../../support-class/ClassiSupporto';
import {AccountingService} from '../../services/data/accounting.service';
import {AbbonamentoMagazzinoService} from '../../services/data/abbonamento-magazzino.service';
import {AbbonamentoService} from '../../services/data/abbonamento.service';
import {SpedizioneService} from '../../services/data/spedizione.service';
import {resolveFileWithPostfixes} from '@angular/compiler-cli/ngcc/src/utils';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.css']
})
export class PagamentoComponent implements OnInit {

  @Input() tipoPagamento: string;
  @Input() spedizione: Spedizione;
  @Input() abbonamento: Abbonamento;
  @Input() abbonamentoMagazzino: AbbonamentoMagazzino;
  @Input() hubScelto: Hub;

  cartaCredito: CartaCredito;
  numero: string;
  nomeIntestatario: string;
  cognomeIntestatario: string;
  cvv: string;

  abbonamentoMagazzinoSottoscritto: AbbonamentoMagazzinoSottoscritto;
  abbonamentoSottoscritto: AbbonamentoSottoscritto;
  spedizioneEffettuata: Spedizione;

  msg: string;
  errMsg: string;
  msgW: string;


  constructor(private accountingService: AccountingService,
              private abbonamentoMagazzinoService: AbbonamentoMagazzinoService,
              private abbonamentoService: AbbonamentoService,
              private spedizioneService: SpedizioneService) { }

  ngOnInit(): void {

  }

  pagamento(){
    this.cartaCredito = new CartaCredito(this.numero.replace(/\s/g, ""), this.nomeIntestatario, this.cognomeIntestatario, this.cvv)
    if(this.tipoPagamento === "SPEDIZIONE")
      this.pagaSpedizione();
    else if(this.tipoPagamento === "ABBONAMENTO")
      this.pagaAbbonamento();
    else if(this.tipoPagamento === "ABBONAMENTO_MAGAZZINO")
      this.pagaAbbonamentoMagazzino();
  }

  private pagaSpedizione(){
    this.msgW = "Attendi esito!!"
    //console.log(JSON.stringify({"spedizione": this.spedizione, "cartaCredito": this.cartaCredito}))
    this.spedizioneService.aggiungi(
      this.accountingService.loggedUser(), {"spedizione": this.spedizione, "cartaCredito": this.cartaCredito}).subscribe(
      response =>{
        this.spedizioneEffettuata = response;
        this.msg = "la spedizione numero "+this.spedizioneEffettuata.idSpedizione+" è stata registrata correttamente nei nostri sistemi"
        this.msgW = null;
      }, error => {
        this.errMsg = error.error.message;
        this.msgW = null;
      }
    )

  }

  private pagaAbbonamento() {
    this.msgW = "Attendi esito!!"
    this.abbonamentoService.sottoscriviAbbonamento(this.accountingService.loggedUser(), this.abbonamento.idAbbonamento, this.cartaCredito).subscribe(
      response =>{
        this.abbonamentoSottoscritto = response;
        this.msg = "abbonamento sottoscritto correttamente per maggiori informazioni visitare la"
        this.msgW = null;
      },
      error => {
        this.errMsg = error.error.message;
        this.msgW = null;
      }
    )
  }

  private pagaAbbonamentoMagazzino() {
    this.msgW = "Attendi esito!!"
    this.abbonamentoMagazzinoService
      .sottoscriviAbbonamento(
        this.accountingService.loggedUser(),this.abbonamentoMagazzino.idAbbonamento, this.hubScelto.idHub, this.cartaCredito).subscribe(
      response =>{
        this.abbonamentoMagazzinoSottoscritto = response;
        this.msg = "abbonamento sottoscritto correttamente per maggiori informazioni visitare la"
        this.msgW = null;
      },
      error => {
        this.errMsg = error.error.message;
        this.msgW = null;
      }
    )

  }
}
