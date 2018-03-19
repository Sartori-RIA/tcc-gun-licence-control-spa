import {Injectable} from '@angular/core';

@Injectable()
export class DataService {
  private _token: string = "token";
  private _userName: string = "currentUserName";
  private _userID: string = "currentUserID";
  private _userCPF: string = "currentUserCPF";
  private _userRole: string = "currentUserRole";

  setToken(value: string) {
    localStorage.setItem(this._token, value);
  }

  setUserName(value: string) {
    localStorage.setItem(this._userName, value);
  }

  setUserID(value: string) {
    localStorage.setItem(this._userID, value);
  }

  setUserCPF(value: string) {
    localStorage.setItem(this._userCPF, value);
  }

  setUserRole(value: string) {
    localStorage.setItem(this._userRole, value);
  }

  getToken(): string {
    return localStorage.getItem(this._token);
  }

  getUserName(): string {
    return localStorage.getItem(this._userName);
  }

  getUserID(): string {
    return localStorage.getItem(this._userID);
  }

  getUserCPF(): string {
    return localStorage.getItem(this._userCPF);
  }

  getUserRole(): string {
    return localStorage.getItem(this._userRole);
  }

  isEmpty(): boolean {
    return this.getUserCPF() == null || this.getUserCPF() == '' ||
      this.getUserRole() == null || this.getUserRole() == '' ||
      this.getUserName() == null || this.getUserName() == '' ||
      this.getToken() == null || this.getToken() == '' ||
      this.getUserID() == '' || this.getUserID() == null;
  }

  clear(): void {
    localStorage.clear();
  }
}
