import {Injectable} from '@angular/core';
import {Commande} from "../models/commande";
import firebase from "firebase";
import {Subject} from "rxjs";
import {AngularFireDatabase} from "@angular/fire/database";
import {Produit} from "../models/produit";

@Injectable({
  providedIn: 'root'
})
export class CommandeService {
  commandes: Commande[] = [];
  produits: Produit[] = [];
  commandesSubject = new Subject<Commande[]>();
  constructor(private db: AngularFireDatabase) {
    this.getAll();
  }


  getAll(): Promise<any> {
    return new Promise(
      (resolve, reject) => {
        firebase.database().ref('/commandes').on('value', (data) => {
          this.commandes = data.val() ? data.val() : [];
          this.emitCommandsSubject();
          resolve('Resolu');
        },
          err => {
            reject(err);
          });
      });
  }
  create(commandes: Commande[]): Promise<any>{
    return new Promise<any>(
      ((resolve, reject) => {
        firebase.database().ref('/commandes').set(commandes).then(
          () => {
            resolve('Save ');
          }
        ).catch(reason => {
          reject('Error: ' + reason);
        });
      })
    )
  }

  emitCommandsSubject(): void {
    this.commandesSubject.next(this.commandes);
  }
}
