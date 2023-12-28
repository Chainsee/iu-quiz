import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUser!: string;

  constructor() { }

  setCurrentUser(user: string) {
    this.currentUser = user;
  }

  getCurrentUser() {
    return this.currentUser;
  }
}
