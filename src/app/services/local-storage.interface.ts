export interface ILocalStorage {
  getItem(key: string): any;
  setItem(key: string, value: any): void;
}
