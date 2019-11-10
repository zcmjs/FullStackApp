import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() {
  }

  authenticate(username, password) {
    if (username === 'macon' && password === 'ssie') {
      console.log();
      sessionStorage.setItem('macon-authenticatedUser', username);
      return true;
    } else {
      return false;
    }
  }

  isUserLoggedIn() {
    const item = sessionStorage.getItem('macon-authenticatedUser');
    console.log('item :: ' + (!!item));
    return !!item;
  }

  loggout() {
    sessionStorage.removeItem('macon-authenticatedUser');
  }

}
