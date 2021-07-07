import {Produit} from "./produit";

export class Commande {

  constructor(
    public id: number,
    public nomClient: string,
    public prenomClient: string,
    public numeroTelephone: number,
    public listeProduits: Produit[],
    public montant: number,
    public date: string
  ) {}
}
