import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  isLogged: boolean = false;

  logged():boolean{
    this.isLogged = true
    return true
  }

  notLogged():boolean{
    this.isLogged = false
    return false
  }

  isAuthenticated(){
    return this.isLogged
  }
}
