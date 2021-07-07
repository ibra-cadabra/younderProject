export class Produit {
  public id: number;
  public nomProduit: string;
  public qualiteProduit: string;
  public tailleProduit: number;
  public prix: number;

  constructor() {
    this.id = 0;
    this.nomProduit = '';
    this.qualiteProduit = '';
    this.tailleProduit = 1;
    this.prix = 1000;
  }
}
