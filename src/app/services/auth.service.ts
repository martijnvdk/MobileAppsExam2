/* Made by:
Martijn van de Kamer
1803202 */

import { Injectable } from "@angular/core";
import * as firebase from 'firebase/app';
import { NavController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private navCtrl: NavController) { 
  }

  registerUser(value) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
        .then(
          res => resolve(res),
          err => reject(err))
    })
  }

  loginUser(value) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(value.email, value.password)
        .then(
          res => resolve(res),
          err => reject(err))
    })
  }

  logoutUser() {
    return new Promise((resolve, reject) => {
      if (firebase.auth().currentUser) {
        firebase.auth().signOut()
          .then(() => {
            console.log("LOG Out");
            this.navCtrl.navigateBack('/');
            resolve();
          }).catch((error) => {
            reject();
          });
      }
    })
  }
}