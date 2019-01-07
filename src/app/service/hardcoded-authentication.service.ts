import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username, password) {
    // console.log('before', this.isUsedLoggedIn());
    if (username === 'jaswanth0050' && password === 'jesse') {
      sessionStorage.setItem('authenticatedUser', username);
      // console.log('after', this.isUsedLoggedIn());
      return true;
    }
    return false;
  }
  isUsedLoggedIn() {
    const user = sessionStorage.getItem('authenticatedUser');
    return !(user === null);
  }

  logout() {
    sessionStorage.removeItem('authenticatedUser');
  }
}
