  /* Made by:
  Martijn van de Kamer
  1803202 */

  import { Injectable } from '@angular/core';
  import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
  import { Observable } from 'rxjs';
  import { AuthService } from '../services/auth.service';
  import { AlertController } from '@ionic/angular';
  import * as firebase from 'firebase/app';
  import 'firebase/auth';
  
  @Injectable({
    providedIn: 'root'
  })
  export class AuthGuard implements CanActivate {
  
    constructor(private router: Router, private auth: AuthService, private alertCtrl: AlertController) { }
  
    canActivate(
  
      // If user is not logged, restrict visit to only /login and /register
  
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
      return new Promise((resolve, reject) => {
        firebase.auth().onAuthStateChanged((user: firebase.User) => {
          if (user) {
            resolve(true);
          } else {
            this.alertCtrl.create({
              header: 'Unauthorized',
              message: 'You are not allowed to access that page. Please log in first.',
              buttons: ['OK']
            }).then(alert => alert.present());
            this.router.navigateByUrl('/');
            resolve(false);
          }
        });
      });
    }
  
  }
  