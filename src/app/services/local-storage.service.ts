import { Injectable } from '@angular/core';
import { ILocalStorage } from './local-storage.interface';

@Injectable()
export class LocalStorageService implements ILocalStorage {

  constructor() { }

  getItem(key: string): any {
    return JSON.parse(window.localStorage.getItem(key));
  }

  setItem(key: string, value: any): void {
    window.localStorage.setItem(key, JSON.stringify(value));
  }

}
