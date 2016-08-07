/* tslint:disable:no-unused-variable */

import { it, describe, expect, beforeEach,  afterEach, addProviders, async, inject } from '@angular/core/testing';
import { LocalStorageService } from './local-storage.service';

const mockStorageKey = 'mockStorageKey';

describe('Service: LocalStorage', () => {
  beforeEach(() => {
    addProviders([LocalStorageService]);
    window.localStorage.clear();
  });

  afterEach(() => {
    window.localStorage.clear();
  });

  it('exists',
    inject([LocalStorageService],
      (service: LocalStorageService) => {
        expect(service).toBeTruthy();
      }));

  it('stores items in localStorage',
    inject([LocalStorageService],
      (service: LocalStorageService) => {
        let item = { key: 'value' };
        service.setItem(mockStorageKey, item);

        expect(window.localStorage.getItem(mockStorageKey)).toEqual(item);
      }));

  it('gets items from localStorage',
    inject([LocalStorageService],
      (service: LocalStorageService) => {
        let item = { key: 'value' };
        window.localStorage.setItem(mockStorageKey, JSON.stringify(item));

        expect(service.getItem(mockStorageKey)).toEqual(item);
      }));
});
