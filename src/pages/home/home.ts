import { Component } from '@angular/core';
import { GooglePlus } from 'ionic-native';

@Component({
  template: `
    <ion-content padding>
      <ion-card *ngIf="userData">
        <ion-card-content>
          <img class="profile-img" [hidden]="!userData" [src]="userData.imageUrl" />
          <h1>{{userData.displayName}}</h1>
          <p>{{userData.email}}</p>
        </ion-card-content>
      </ion-card>
      <button (click)="loginUser()">Login</button>
      <button (click)="logoutUser()">Logout</button>
    </ion-content>
  `
})

export class HomePage {
  public userData;

  loginUser() {
    GooglePlus.login({})
      .then(
        (res) => {
          console.log('good');
          this.userData = res;
        },
        (err) => {
          console.log('error');
          console.log(err);
        }
      );
  }

  logoutUser() {
    GooglePlus.logout().then(() => this.userData = null);
  }
}
