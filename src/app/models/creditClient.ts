import {Credit} from "./credit";

export class CreditClient {
  id: number;
  prenomClient: string;
  nomClient: string;
  numeroClient: number;
  montantCredit: number;
  dateCredit: string;
  listeAccompte: Credit[];

  constructor(
    id: number,
    nomClient: string,
    prenomClient: string,
    numeroClient: number,
    montant: number,
    date: string,
    listeAccompte: Credit[]
  ) {
    this.id = id;
    this.nomClient = nomClient;
    this.prenomClient = prenomClient;
    this.numeroClient = numeroClient;
    this.montantCredit = montant;
    this.dateCredit = date;
    this.listeAccompte = listeAccompte;
  }
}
