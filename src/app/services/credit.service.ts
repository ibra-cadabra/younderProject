import { Injectable } from '@angular/core';
import firebase from "firebase";
import {CreditClient} from "../models/creditClient";
import {Subject} from "rxjs";
import {Credit} from "../models/credit";

@Injectable({
  providedIn: 'root'
})
export class CreditService {
  creditEnCours: CreditClient[] = [];
  currentCredit: CreditClient | undefined;
  creditEnCoursSubject = new Subject<CreditClient[]>();

  constructor() {
    this.getAllCreditEnCours();
  }

  getAllCreditEnCours(): Promise<any> {
    return new Promise(
      (resolve, reject) => {
        firebase.database().ref('/creditEnCours').on('value', (data) => {
            this.creditEnCours = data.val() ? data.val() : [];
            this.emitCreditEnCoursSubject();
            resolve('Resolve');
          },
          err => {
            reject(err);
          });
      });
  }
  create(credits: CreditClient[]): Promise<any>{
    return new Promise<any>(
      ((resolve, reject) => {
        alert('sz');
        firebase.database().ref('/creditEnCours').set(credits).then(
          () => {
            resolve('resolve');
          }
        ).catch(reason => {
          reject('Error: ' + reason);
        });
      })
    )
  }

  emitCreditEnCoursSubject(): void {
    this.creditEnCoursSubject.next(this.creditEnCours);
  }
}
