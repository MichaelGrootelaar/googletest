import { Component } from '@angular/core';

@Component({
  template: `
    <ion-content padding>
      <ion-card *ngIf="userData">
        <ioncard-content>
          <img class="profile-img" [hidden]="!userData" [src]="userData.imageUrl" />
          <h1>{{userData.displayName}}</h1>
          <p>{{userData.email}}</p>
        </ion-card-content>
      </ion-card>
      <button (click)="loginUser()">Login</button>
      <button (click)="logoutUser()">Login</button>
    </ion-content>
  `
})

export class HomePage {
  public userData;
}
